import React, { useState, useEffect } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import BlogHome from "../BlogPost/BlogPost";
import Header from "../../Components/Header";
import BlogCard from "../../Components/BlogCard/BlogCard";
import { config } from "../../config";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogsFromGithubIssues();
  }, [getBlogsFromGithubIssues]);

  function getBlogsFromGithubIssues() {
    const client = new ApolloClient({
      uri: "https://api.github.com/graphql",
      request: operation => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${atob(config.githubConvertedToken)}`
          }
        });
      }
    });

    client
      .query({
        query: gql`
          {
            repository(owner: "${config.githubUserName}", name: "${config.githubRepo}") {
              issues(first: 100, states: OPEN, filterBy: { labels: "blog" }) {
                nodes {
                  title
                  body
                  bodyHTML
                  bodyText
                  number
                  labels(first: 100) {
                    nodes {
                      color
                      name
                      id
                    }
                  }
                  author {
                    url
                    avatarUrl
                    login
                  }
                  updatedAt
                  id
                }
              }
            }
          }
        `
      })
      .then(result => {
        setBlogsFunction(result.data.repository.issues.nodes);
      });
  }

  function setBlogsFunction(array) {
    setBlogs(array);
  }
  return (
    <div>
      <Header />
      <div className="blog-div-main">
        {blogs.map((v, i) => {
          return <BlogCard blog={v} key={i} />;
        })}
      </div>
    </div>
  );
}

export default Blogs;
