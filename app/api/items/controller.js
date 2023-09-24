const { Todo, Item } = require('../../db/models');

module.exports = {
    getById : async(req, res, next) =>{
        try{
            const { id } = req.params;
            const result = await Item.findOne({
                where: {id: id}
            })

            res.status(200).json({
                message : 'success',
                data : result
            })
        }catch(err){
            // console.log(err)
            next(err)
        }
    },

    create : async(req, res, next) =>{
        try{
            const { name, TodoId } = req.body;
            const result = await Item.create({
                name, TodoId
            })

            res.status(200).json({
                message : 'success',
                data : result
            })
        }catch(err){
            // console.log(err)
            next(err)
        }
    },
    

    update : async(req, res, next) =>{
       const { id } = req.params;
       const { name, TodoId } = req.body;
       
       Item.findOne({
            where: {id: id}
       }).then((item) => {
        item.update({
                    name : name,
                    TodoId : TodoId
                }).then(() => {
                    res.status(200).json({
                        message : 'success',
                        data : item
                    })
                })
       }).catch((err) => {
        // console.log(err)
        next(err)
       })
    },

    destroy : async(req, res, next) =>{
        const { id } = req.params;
        
        // Todo.destroy({
        //      where: {id: id}
        // }).then((todo) => {
        //     res.status(200).json({
        //         message : 'success',
        //         data : todo
        //     }) 
        // }).catch((err) => {
        //  console.log(err)
        // })

        Item.findOne({
            where: {id: id}
        }).then((item) => {
                item.destroy().then(() => {
                    res.status(200).json({
                        message : 'success',
                        data : item
                    })
                })
        }).catch((err) => {
            next(err)
        })
    },

    move: async(req, res) => {
        try{
            const { id } = req.params;
            const{ targetTodoId } = req.body;

            const result = await Item.findOne({
                                    where: {id : id}
                                })
            result.TodoId = targetTodoId;

            await result.save();

            res.status(200).json({
                message: 'success',
                data : result
            })

            // Item.findOne({
            //     where: {id : id}
            // }).then((item) => {

            // }).catch((err) => {

            // })
        }catch(err){
            next(err)
        }
    }

}