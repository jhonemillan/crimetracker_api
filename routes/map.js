var express = require('express');
var router = express.Router();
var Point = require('../models/point');



router.post('/add',ensureUnauthenticated,  function(req, res, next){
    console.log(req.body);
    Point.create({ user_id: req.body.user_id,
                  comment: req.body.comment,
                  date: req.body.date,
                  location: req.body.location
                 })
    .then((point)=>{
        res.json(point);
    })
    .catch((err)=>{
        return next(err);
    });
});

router.post('/getpoints', (req, res, next)=>{
    //console.log(req.body.geometry.coordinates);
    Point.find({ location: { 
        $geoWithin: { 
            $geometry: {
                type: 'Polygon',
                coordinates:
                    [ [
                        [ -76.51919982039546, 3.443944398846111 ],
                        [ -76.51147505843257, 3.443944398846111 ],
                        [ -76.51147505843257, 3.456281617074582 ],
                        [ -76.51919982039546, 3.456281617074582 ],
                        [ -76.51919982039546, 3.443944398846111 ] 
                    ]
                    ]   
                
            }
             }}},function (listPoints){
                console.log(listPoints);
                res.json(listPoints);
            });
    
});

router.get('/near',(req, res)=>{
    Point.find({
             location : {
                $near: {
                        $geometry: {
                            type: 'Point' ,
                            coordinates: [ -76.53486 , 3.446639 ]

                        },                                    
                        $maxDistance: 1000,
                        $minDistance: 10
                    },
                }
          },
    (data)=>{
        console.log('null data',data);
    });
});

router.get('/all', ensureUnauthenticated, (req, res)=>{
    Point.find({})
    .then((data)=>{
        res.json(data);
    })
});  


router.get('/neartemp',(req, res)=>{
    Point.find({
        location:
        { $near:
           {
             $geometry: { type: "Point",  coordinates: [ -73.9667, 40.78 ] },
             $minDistance: 1000,
             $maxDistance: 5000
           }
        }
          },
    (data)=>{
        console.log('null data',data);
    });
});

function ensureUnauthenticated(req, res, next) {
    console.log(req.session.user);
    next();
  }




module.exports = router;