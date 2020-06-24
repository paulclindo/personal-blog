import React, { useState, useEffect } from "react";
import readingTime from "reading-time";
import { useHistory } from "react-router-dom";
import moment from "moment";

import {
  CardContainer,
  CardHeader,
  CardCategory,
  CardReadingTime,
  CardTitle,
  CardDescription,
  AuthorContainer,
  AvatarImg,
} from "./";

export const Card = ({ blog }) => {
  const [labels, setLabels] = useState([]);
  const history = useHistory();
  console.log({ blog });
  const openBlog = (title, number) => {
    history.push(`/blog/${title}/${number}`);
  };

  useEffect(() => {
    const labels = blog.labels.nodes.filter((value) => {
      return value.name !== "blog";
    });

    setLabels(labels);
  }, [blog.labels.nodes]);

  return (
    <CardContainer>
      <CardHeader>
        <>
          {labels.map((value, i) => {
            return <CardCategory value={value} key={i} />;
          })}
        </>
        <CardReadingTime time={readingTime(blog.body).minutes} />
      </CardHeader>
      <div onClick={() => openBlog(blog.title, blog.number)}>
        <CardTitle>{blog.title}</CardTitle>
        <CardDescription>{blog.bodyText}</CardDescription>
      </div>
      <AuthorContainer>
        <AvatarImg>
          <img src={blog.author.avatarUrl} alt="" />
        </AvatarImg>
        <span>{moment(blog.updatedAt).format("LL")}</span>
        <p>By {blog.author.login}</p>
      </AuthorContainer>
    </CardContainer>
  );
};
