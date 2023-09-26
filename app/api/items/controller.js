const { Todo, Item } = require('../../db/models');
var response = require('../../utils/response');

module.exports = {
    getById : async(req, res, next) =>{
        try{
            const { id } = req.params;
            const result = await Item.findOne({
                where: {id: id}
            })

            // res.status(200).json({
            //     message : 'success',
            //     data : result
            // })

            response.ok(result, 'Get Data Item By ID', '00', 200, false, res)
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

            // res.status(200).json({
            //     message : 'success',
            //     data : result
            // })

            response.ok(result, 'Insert Data to Items', '00', 200, false, res)
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
                    // res.status(200).json({
                    //     message : 'success',
                    //     data : item
                    // })

                    response.ok(item, 'Update Data Item By Id, name and TodoId', '00', 200, false, res)
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
                    // res.status(200).json({
                    //     message : 'success',
                    //     data : item
                    // })

                    response.ok(item, 'Delete Data Item By Id', '00', 200, false, res)
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

            // res.status(200).json({
            //     message: 'success',
            //     data : result
            // })
            response.ok(result, 'Move Data Item by Id and TargetTodoId', '00', 200, false, res)
            

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