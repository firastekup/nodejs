const express = require('express')
const router = express.Router();

let voitures =[{ id: 1 , name:"clio"},{id:2,name : "toyota"},{id:3 , name:"bmw"}];

router.post('/',(req,res) => {
const newvoiture = req.body;
voitures.push(newvoiture);
res.status(201).json(newvoiture)

});

router.get('/',(req,res)=>
{
res.json(voitures);
});

router.get('/:id',(req,res)=>{
const id = parseInt(req.params.id);
const voiture = voitures.find(v => v.id === id);
if(voiture)
{
    res.json(voiture);
}
else {resizeTo.status(404).send('voiture introuvable ')};

});

router.put('/:id',(req,res)=>
{
const id = parseInt(req.params.id);
const index = voitures.findIndex(v => v.id === id);
if (index !== -1)
{
    voitures[index] = req.body;
    res.json(voitures[index]);
}
else 

{ res.status(404).send('voiture non trouvé')}
});

router.delete(':id',(req,res)=>
{
    const id = parseInt(req.params.id);
    const index = voitures.findIndex(v => v.id === id);
    if (index !== -1) {
        voitures.splice(index, 1);
        res.send('Voiture supprimée avec succès');
    } else {
        res.status(404).send('désolé Voiture non trouvée');
    }
});

module.exports = router;
