import farmgistic_logo from './assests/farmgistic_logo.png';
import { useMutation } from '@apollo/client';
import { FIND_FARMER_POST } from '../graphql/mutations';
import React, { useEffect } from 'react';
import {
    Card,
    Typography,
    makeStyles,
    CardActionArea,
    CardMedia,
    CardContent,
    Button,
    Theme,
    createStyles,
    Fab,
    Tooltip,
    CardActions
} from '@material-ui/core';
interface order {
    getPostByFarmer: {
        title?: String;
        des?: String;
    };
}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        fab: {
            margin: theme.spacing(2)
        },
        absolute: {
            position: 'absolute',
            bottom: theme.spacing(2),
            right: theme.spacing(3)
        }
    })
);
const OrderItem = ({ val }: any) => {
    const [getPostByFarmer, { data, error }] =
        useMutation<order>(FIND_FARMER_POST);
    const firstOrders = () => {
        getPostByFarmer({
            variables: {
                id: val
            }
        });
    };
    if (error || !data) console.log(error);
    useEffect(() => {
        firstOrders();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log(data?.getPostByFarmer);
    const classes = useStyles();
    return (
        <div className="root">
            <Card >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={farmgistic_logo}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            Lizards are a widespread group of squamate reptiles,
                            with over 6,000 species, ranging across all
                            continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button color="secondary" variant="contained">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
           <Tooltip title="Add" aria-label="add">
        <Fab color="secondary" className={classes.absolute}>
          {/* <AddIcon /> */}
        </Fab>
      </Tooltip>
        </div>
    );
};
export default OrderItem;
