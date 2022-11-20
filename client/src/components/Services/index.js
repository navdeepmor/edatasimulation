import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Services = () => {
  const services = useSelector((state) => state.services);

  console.log(services);

  return (
      !services.length ? <CircularProgress color="inherit" /> : (
          <div>
              {services.map((service) => (
                  <Card key={service.name} sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={service.image}
                      alt="IMAGE HERE"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {service.name}
                      </Typography>
                      {/* <Typography gutterBottom variant="h3" component="div">
                        {service.heading}
                      </Typography> */}
                      <Typography variant="body2" color="text.secondary">
                        {service.desciption}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
          </div>
      )
  );
}

export default Services;