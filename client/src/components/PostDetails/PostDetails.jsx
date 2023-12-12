import React, { useEffect } from "react";
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useHistory } from "react-router-dom";

import { getPost, getPostsBySearch } from "../../actions/posts";
import useStyles from "./styles";
import CommentSection from "./CommentSection";
const PostDetails = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  useEffect(() => {
    if (post) {
      dispatch(
        getPostsBySearch({ serach: "none", tags: post?.tags.join(",") })
      );
    }
  }, [post]);

  var isVideo = null;

  if (!post) return null;

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  } else {
    isVideo = post.selectedFile.startsWith("data:video");
    console.log(isVideo);
  }

  const recommendedPosts = posts.filter(({ _id }) => _id != post._id);
  const openPost = (_id) => history.push(`/posts/${_id}`);
  console.log("POST DETAILS");
  return (
    <Paper
      style={{
        padding: "20px",
        borderRadius: "15px",
        color: "#E0E0E0",
        backgroundColor: "#333333",
      }}
      elevation={6}
    >
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">
            {post.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            {post.message}
          </Typography>
          <Typography variant="h6">Created by: {post.name}</Typography>
          <Typography variant="body1">
            {moment(post.createdAt).fromNow()}
          </Typography>
          <Divider className={classes.borderColor} />
          {/* <Divider style={{ margin: "20px 0" }} /> */}
          <CommentSection post={post} />
          <Divider className={classes.borderColor} />
        </div>

        <div className={classes.imageSection}>
          {isVideo ? (
            // Render video content
            <video
              width="520px"
              height="420px"
              controls
              style={{
                borderRadius: "15px",
                boxShadow: "rgba(0, 0, 0, 0.4) 3px 3px 10px",
              }}
            >
              <source src={post.selectedFile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            // Render non-video content
            <img
              src={
                post.selectedFile ||
                "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
              }
              width="520px"
              height="420px"
              style={{
                objectFit: "cover",
                borderRadius: "15px",
                boxShadow: "rgba(0, 0, 0, 0.4) 3px 3px 10px",
              }}
            />
          )}
        </div>
      </div>
      {recommendedPosts.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5">
            You might also like:
          </Typography>
          <Divider className={classes.borderColor} />

          <div
            className={classes.recommendedPosts}
            style={{ overflow: "auto" }}
          >
            {recommendedPosts
              .slice(0, 6)
              .map(({ title, message, name, likes, selectedFile, _id }) => (
                <div
                  style={{
                    margin: "20px",
                    cursor: "pointer",
                    border: "2px",
                    backgroundColor: "#292929",

                    borderRadius: "15px",
                  }}
                  on
                  onClick={() => openPost(_id)}
                  key={_id}
                  elevation={6}
                >
                  <Typography
                    gutterBottom
                    variant="h6"
                    style={{ paddingLeft: "10px", paddingRight: "10px" }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                    style={{ paddingLeft: "10px", paddingRight: "10px" }}
                  >
                    {name}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                    style={{ paddingLeft: "10px", paddingRight: "10px" }}
                  >
                    {message}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    style={{ paddingLeft: "10px", paddingRight: "10px" }}
                  >
                    Likes: {likes.length}
                  </Typography>
                  {selectedFile.startsWith("data:video") ? (
                    <video
                      width="220px"
                      height="120px"
                      style={{
                        objectFit: "cover",
                        borderRadius: "15px",
                        padding: "10px",
                        marginTop: "auto",
                      }}
                      src={selectedFile}
                    ></video>
                  ) : (
                    <img
                      src={
                        selectedFile ||
                        "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                      }
                      width="220px"
                      height="120px"
                      style={{
                        objectFit: "cover",
                        borderRadius: "15px",
                        padding: "10px",
                        marginTop: "auto",
                      }}
                    />
                  )}
                </div>
              ))}
          </div>
        </div>
      )}
    </Paper>
  );
};

export default PostDetails;
