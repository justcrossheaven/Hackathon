import React, { useCallback, useMemo, useState, useEffect } from "react";
import { createEditor } from "slate";
import { withHistory } from "slate-history";
import { Slate, Editable, withReact } from "slate-react";
import Toolbar from "./Toolbar/Toolbar";
import { sizeMap, fontFamilyMap } from "./utils/SlateUtilityFunctions.js";
import withLinks from "./plugins/withLinks.js";
import withTables from "./plugins/withTable.js";
import withEmbeds from "./plugins/withEmbeds.js";
import "./Editor.css";
import Link from "./Elements/Link/Link";
import Image from "./Elements/Image/Image";
import Video from "./Elements/Video/Video";

import { GrammarlyEditable, GrammarlySlate } from "@grammarly/react-slate";
import { Typography } from "@mui/material";

const Element = (props) => {
  const { attributes, children, element } = props;

  switch (element.type) {
    case "headingOne":
      return <h1 {...attributes}>{children}</h1>;
    case "headingTwo":
      return <h2 {...attributes}>{children}</h2>;
    case "headingThree":
      return <h3 {...attributes}>{children}</h3>;
    case "blockquote":
      return <blockquote {...attributes}>{children}</blockquote>;
    case "alignLeft":
      return (
        <div
          style={{ textAlign: "left", listStylePosition: "inside" }}
          {...attributes}
        >
          {children}
        </div>
      );
    case "alignCenter":
      return (
        <div
          style={{ textAlign: "center", listStylePosition: "inside" }}
          {...attributes}
        >
          {children}
        </div>
      );
    case "alignRight":
      return (
        <div
          style={{ textAlign: "right", listStylePosition: "inside" }}
          {...attributes}
        >
          {children}
        </div>
      );
    case "list-item":
      return <li {...attributes}>{children}</li>;
    case "orderedList":
      return (
        <ol type="1" {...attributes}>
          {children}
        </ol>
      );
    case "unorderedList":
      return <ul {...attributes}>{children}</ul>;
    case "link":
      return <Link {...props} />;

    case "table":
      return (
        <table>
          <tbody {...attributes}>{children}</tbody>
        </table>
      );
    case "table-row":
      return <tr {...attributes}>{children}</tr>;
    case "table-cell":
      return <td {...attributes}>{children}</td>;
    case "image":
      return <Image {...props} />;
    case "video":
      return <Video {...props} />;
    default:
      return <p {...attributes}>{children}</p>;
  }
};
const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }
  if (leaf.strikethrough) {
    children = (
      <span style={{ textDecoration: "line-through" }}>{children}</span>
    );
  }
  if (leaf.underline) {
    children = <u>{children}</u>;
  }
  if (leaf.superscript) {
    children = <sup>{children}</sup>;
  }
  if (leaf.subscript) {
    children = <sub>{children}</sub>;
  }
  if (leaf.color) {
    children = <span style={{ color: leaf.color }}>{children}</span>;
  }
  if (leaf.bgColor) {
    children = (
      <span style={{ backgroundColor: leaf.bgColor }}>{children}</span>
    );
  }
  if (leaf.fontSize) {
    const size = sizeMap[leaf.fontSize];
    children = <span style={{ fontSize: size }}>{children}</span>;
  }
  if (leaf.fontFamily) {
    const family = fontFamilyMap[leaf.fontFamily];
    children = <span style={{ fontFamily: family }}>{children}</span>;
  }
  return <span {...attributes}>{children}</span>;
};
const SlateEditor = (props) => {
  const editor = useMemo(
    () =>
      withHistory(withEmbeds(withTables(withLinks(withReact(createEditor()))))),
    []
  );

  const [value, setValue] = useState(props.editorContent);

  const onChange = useCallback(
    (value) => {
      setValue(value);
      const content = JSON.stringify(value);
    },
    [setValue]
  );

  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "test",
      author: "test",
      wordCount: 100,
      content: JSON.stringify(value),
    }),
  };

  useEffect(() => {
    const request_put = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: "test",
        title: "test",
        author: "test",
        wordCount: 100,
        content: JSON.stringify(value),
      }),
    };

    const interval = setInterval(
      () =>
        fetch("http://localhost:3001/document", request_put).then((res) => {
          // console.log(res);
        }),
      30000
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

  const saveToDatabse = () => {
    fetch("http://localhost:3001/document", request).then((res) => {
      // console.log(res);
    });
  };

  saveToDatabse();

  const wordCount = () => {
    let count = 0;
    value.forEach((element) => {
      element.children.forEach((child) => {
        if (child.text) {
          let s = child.text;
          s = s.replace(/\s\s+/g, " ");
          s = s.replace(/  +/g, " ");
          count += s.split(" ").length;
        } else if (child.children) {
          child.children.forEach((child) => {
            if (child.text) {
              let s = child.text;
              s = s.replace(/\s\s+/g, " ");
              s = s.replace(/  +/g, " ");
              count += s.split(" ").length;
            }
          });
        }
      });
    });
    props.setWordCount(count);
    return count;
  };

  const renderElement = useCallback((props) => <Element {...props} />, []);

  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

  return (
    <div>
      <Slate
        editor={editor}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      >
        <Toolbar />
        <div
          className="editor-wrapper"
          style={{
            border: "1px solid #f3f3f3",
            padding: "0 10px",
          }}
        >
          {/* <Editable
                        placeholder='Write something'
                        renderElement={renderElement} 
                        renderLeaf={renderLeaf}
                    /> */}
          <GrammarlySlate value={value} clientId="your-client-id-here">
            <GrammarlyEditable
              placeholder="Write something"
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              style={{ padding: "10px" }}
            />
          </GrammarlySlate>
        </div>
      </Slate>
      {/* <Typography
        style={{
          position: "absolute",
          bottom: "10px",
          right: "20px",
          color: "grey",
          pointerEvents: "none",
        }}
      >
        Next Level: {wordCount() === 0 ? 0 : wordCount() - 1}/100
      </Typography> */}
    </div>
  );
};

export default SlateEditor;
