const { Router } = require("express")


const products = Router()
const data=[]

products.get('/', (req, res) => {
          res.send(data);
    })

products.post('/create', (req, res) => {
    const object = req.body;
    console.log(object)
    data.push(object)
    res.send(data)
})

products.put('/:productId', (req, res) => {
     const id = req.params.productId
     let index = 0
     data.forEach((ele, i) => {
          if (ele.id === id) {
               index = i;
          }
     })
     data[index] = req.body;
     res.send(data)
})

products.patch('/:productId', (req, res) => {
     const id = req.params.productId
     let index = 0
     data.forEach((ele, i) => {
          if (ele.id === id) {
               index = i;
          }
     })
     data[index] = { ...data[index] , ...req.body };
     res.send(data)
})

products.delete('/:productId', (req, res) => {
     const  id = req.params.productId
     let index=0
     data.forEach((ele,i)=>{
        if(ele.id===id){
            index=i;
        }
     })
     data.splice(index, 1)
     res.send(data)
})

module.exports = products