import React from 'react';
import { Card, CardContent, CardHeader, Avatar, IconButton, Typography, Grid, Divider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import StarIcon from '@mui/icons-material/Star';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build'; // Use as alternative icon if needed
import StarBorderIcon from '@mui/icons-material/StarBorder';

function ProfileCard() {
  // Sample courses list, replace with actual data as needed
  const coursesEnrolled = [
    'Introduction to Programming',
    'Advanced JavaScript',
    'React Basics',
    'Data Structures & Algorithms'
  ];

  return (
    <Card sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: 'primary.main' }}>A</Avatar>}
        action={
          <IconButton aria-label="edit">
            <EditIcon />
          </IconButton>
        }
        title="iamayushanand365"
        titleTypographyProps={{ variant: 'h6' }}
        sx={{ marginBottom: 2 }}
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Institution</Typography>
            <Typography variant="body2">Chandigarh University (CU)</Typography>
            <Typography variant="body2">Chandigarh</Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
              <StarIcon sx={{ marginRight: 1 }} /> 5182 Rank
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Language Used</Typography>
            <Typography variant="body2">C++</Typography>
          </Grid>
        </Grid>
        <Divider sx={{ marginY: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Courses Enrolled</Typography>
            <Typography variant="body2">
              <ul>
                {coursesEnrolled.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Coding Score</Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
              <CodeIcon sx={{ marginRight: 1 }} /> 6
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Problem Solved</Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
              <BuildIcon sx={{ marginRight: 1 }} /> 11
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Contest Rating</Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
              <StarBorderIcon sx={{ marginRight: 1 }} /> -
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardContent sx={{ textAlign: 'center', marginTop: 2 }}>
        <Typography variant="body2" sx={{ cursor: 'pointer', color: 'primary.main' }}>
          Apply for Campus Ambassador
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProfileCard;
