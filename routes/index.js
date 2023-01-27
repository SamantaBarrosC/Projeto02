const express =require('express');
const router = express.Router();

router.get('/posts/:id',(req,res) => {
    let slug = req.params.id;
    res.send('SLUG do post:'+ slug);
});
router.get('/rota1',(req,res) => {
    res.send("Pagina sobre rota 1....");
});
router.get('/rota2',(req,res) => {
    
    res.json(req.query);
});
module.exports= router;