import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NewCommentForm from "./NewCommentForm";
import NewCommentsDetailsForm from "./NewCommentsDetailsForm";
import Comments from "./Comments";
import styled from "styled-components";

const Button1 = styled.button`
  background-color: white;
  margin-left: 400px;
  font-size: 12px;
  font-style: italic;
  transition-duration: 0.4s;
  padding: 3px;
  font-family: Times New Roman;
  border: 1px solid rgb(216, 168, 168);
  cursor: pointer;
  border-radius: 15px;

  &:hover {
    background: rgb(216, 168, 168);
    color: white;
    border: none;
  }
  &:focus {
    background: #ffb6c1;
    color: white;
    border: none;
  }
`;

const Button2 = styled.button`
  background-color: white;
  margin-left: 80px;
  margin-rigth: 100px;
  font-size: 12px;
  font-style: italic;
  transition-duration: 0.4s;
  padding: 6px;
  font-family: Times New Roman;
  border: 1px solid rgb(216, 168, 168);
  cursor: pointer;
  border-radius: 15px;

  &:hover {
    background: rgb(216, 168, 168);
    color: white;
    border: none;
  }
  &:focus {
    background: #ffb6c1;
    color: white;
    border: none;
  }
`;

function ImagePage({
  images,
  setImages,
  addtoLikedImageList,
  creativeId,
  image_id,
  addComment,
  comments,
}) {

  const [imagePage, setImagePage] = useState(null);
  const [isFav, setIsFavorited] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  
  const { id } = useParams();
  console.log(id);
  console.log(imagePage);

  useEffect(() => {
    fetch(`http://localhost:3000/images/${id}`)
      .then((response) => response.json())
      .then((imagePage) => setImagePage(imagePage));
   
  }, [id]);

  function handleClickSaved() {
    setIsSaved(!isSaved);
    const SavedImage = {
      creative_id: 1,
      image_id: id,
    };

    console.log(SavedImage);

    fetch(`http://localhost:3000/saved_images`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(SavedImage),
    })
      .then((response) => response.json())
      .then((response) => console.log(response));
  }

  function handlHeartClick() {
    setIsFavorited(!isFav);

    const likedImage = {
      creative_id: 1,
      image_id: id,
    };

    console.log(likedImage);

    fetch(`http://localhost:3000/liked_images`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(likedImage),
    })
      .then((response) => response.json())
      .then((response) => console.log(response));
  }

  return (
    <div className="imagepage">
      {imagePage ? (
        <>
          {" "}
          <h1>{imagePage.title}</h1>
          <img
            className="imagepage"
            src={imagePage.picture}
            alt={imagePage.title}
          />
          <p>{imagePage.description}</p>{" "}
        </>
      ) : (
        "hi"
      )}

      <Button1 className="imgdetails" onClick={handlHeartClick}>
        {isFav ? "♥" : "♡"}
      </Button1>
      <Button2 className="imgdetails" onClick={handleClickSaved}>
        {isSaved ? "saved" : "save"}
      </Button2>

      <NewCommentForm
        addComment={addComment}
        image_id={image_id}
        new_image_id={id}
        comments={comments}
      />
    </div>
  );
}

export default ImagePage;
