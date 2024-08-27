// components/Dashboard/Courses.js
import React from "react";
import { Card, CardContent, CardActions, Typography, Button, Grid, CardMedia, Box } from "@mui/material";

const Courses = () => {
  // Extended list of courses with additional details
  const courses = [
    {
      title: "Introduction to React",
      price: "$99.99",
      discount: "20% Off",
      enrollments: 150,
      image: "https://d1ymz67w5raq8g.cloudfront.net/Pictures/1024x536/P/web/n/z/b/onlinecourses_shutterstock_490891228_2000px_728945.jpg" // Placeholder image URL
    },
    {
      title: "Advanced JavaScript",
      price: "$149.99",
      discount: "15% Off",
      enrollments: 120,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcDJ7_h9JUZzgiB6eOAgzSVrcxB6_9ZuiIzho5v6kqQ9iE80OstnPt9jchXgOKhhRTwmk&usqp=CAU" // Placeholder image URL
    },
    {
      title: "Web Development Bootcamp",
      price: "$299.99",
      discount: "30% Off",
      enrollments: 200,
      image: "https://bemadrid.com/wp-content/uploads/2022/05/online-courses.jpg" // Placeholder image URL
    },
    {
      title: "UI/UX Design Basics",
      price: "$79.99",
      discount: "25% Off",
      enrollments: 180,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBHLQ2yxPflmVoCxdcBjKFnZ3HuE-Xr7bY_jxqVrg1oX5gY0muNWlxR39-ravgSPgQ0k&usqp=CAU" // Placeholder image URL
    },
    {
      title: "Data Structures and Algorithms",
      price: "$129.99",
      discount: "10% Off",
      enrollments: 90,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH4MQUqk_ApEw5QY7wasdZw-JIt0CWhuYWR2k_-1eLa7xhUju5yaOL_NMHp8pryb8LEYA&usqp=CAU" // Placeholder image URL
    },
    {
      title: "Machine Learning 101",
      price: "$199.99",
      discount: "20% Off",
      enrollments: 160,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH4MQUqk_ApEw5QY7wasdZw-JIt0CWhuYWR2k_-1eLa7xhUju5yaOL_NMHp8pryb8LEYA&usqp=CAU" // Placeholder image URL
    },
    {
      title: "Database Management Systems",
      price: "$89.99",
      discount: "5% Off",
      enrollments: 110,
      image: "https://via.placeholder.com/300x200" // Placeholder image URL
    },
    {
      title: "Introduction to Python",
      price: "$119.99",
      discount: "18% Off",
      enrollments: 140,
      image: "https://via.placeholder.com/300x200" // Placeholder image URL
    },
    {
      title: "Full Stack Development",
      price: "$349.99",
      discount: "25% Off",
      enrollments: 220,
      image: "https://via.placeholder.com/300x200" // Placeholder image URL
    },
    {
      title: "Cloud Computing Fundamentals",
      price: "$159.99",
      discount: "22% Off",
      enrollments: 130,
      image: "https://via.placeholder.com/300x200" // Placeholder image URL
    }
  ];

  return (
    <Box sx={{ padding: 2, display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: '100%', maxWidth: 1200 }}>
        <Typography variant="h4" gutterBottom align="center">
          Courses
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {courses.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  maxWidth: 345,
                  margin: 2,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)"
                  }
                }}
              >
                {/* Image Section */}
                <CardMedia
                  component="img"
                  height="140"
                  image={course.image}
                  alt={`${course.title} image`}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {course.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Price:</strong> <span style={{ color: "#1976d2", fontWeight: "bold" }}>{course.price}</span>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Discount:</strong> <span style={{ color: "#d32f2f", fontWeight: "bold" }}>{course.discount}</span>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Enrollments:</strong> {course.enrollments}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Enroll Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Courses;
