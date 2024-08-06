import React from "react";
import { Card, CardContent, Typography, Avatar, Rating, Box } from "@mui/material";

const feedbacks = [
  {
    name: "Jenny Wilson",
    rating: 4,
    comment:
      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
    avatarSrc: "/avatar-6.jpg",
  },
  {
    name: "John Doe",
    rating: 5,
    comment:
      "I had the best experience at this restaurant. The food was delicious and the service was excellent. I highly recommend this place to anyone looking for a great meal.",
    avatarSrc: "/avatar-8.jpg",
  },
  {
    name: "Jane Doe",
    rating: 3,
    comment:
      "The food was good but the service was not great. The waiter was rude and inattentive. I would not recommend this place to anyone.",
    avatarSrc: "/avatar-7.jpg",
  },
  {
    name: "Bob Smith",
    rating: 4,
    comment:
      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
    avatarSrc: "/avatar-10.jpg",
  },
  {
    name: "Alice Smith",
    rating: 5,
    comment:
      "I had the best experience at this restaurant. The food was delicious and the service was excellent. I highly recommend this place to anyone looking for a great meal.",
    avatarSrc: "/avatar-4.jpg",
  },
  {
    name: "Eve Johnson",
    rating: 3,
    comment:
      "The food was good but the service was not great. The waiter was rude and inattentive. I would not recommend this place to anyone.",
    avatarSrc: "/avatar-5.jpg",
  },
];

const CustomerFeedback = ({ name, rating, comment, avatarSrc }) => (
  <Card sx={{ mb: 2, bgcolor: "#1f2029", color: "white", width: "100%", borderRadius: "10px" }}>
    <CardContent>
      <Box display="flex" alignItems="center" mb={1}>
        <Avatar src={avatarSrc} sx={{ mr: 2 }} />
        <Typography variant="h6" align="left">
          {name}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 1 }}>
        <Rating value={rating} readOnly sx={{ mb: 1 }} />
      </Box>
      <Typography variant="body2" align="left">
        {comment}
      </Typography>
    </CardContent>
  </Card>
);

const CustomerFeedbackList = () => (
  <Box
    sx={{
      maxHeight: "82vh",
      overflowY: "auto",
      pr: 2,
      "&::-webkit-scrollbar": {
        width: "4px", // Make the scrollbar thinner
        borderRadius: "2px",
        backgroundColor: "transparent", // Make the background transparent
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#888",
        borderRadius: "2px",
        "&:hover": {
          backgroundColor: "#555",
        },
      },
      // Hide default arrows
      "&::-webkit-scrollbar-button": {
        display: "none",
      },
      // For Firefox
      scrollbarWidth: "thin",
      scrollbarColor: "#888 transparent",
    }}
  >
    <Typography variant="h5" sx={{ mb: 2, color: "white" }} align="left">
      Customer's Feedback
    </Typography>
    {feedbacks.map((feedback, index) => (
      <CustomerFeedback key={index} {...feedback} />
    ))}
  </Box>
);

export default CustomerFeedbackList;
