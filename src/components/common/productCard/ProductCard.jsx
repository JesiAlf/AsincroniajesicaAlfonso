import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const ProductCard = ({item}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={item.image}
        title= {'image ${item.title}'}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {item.descripcion}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.precio}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
        </Button>
      </CardActions>
    </Card>
  );
}
  


export default ProductCard;