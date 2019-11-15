import Post from "../models/Post";

class PostController{

    static async list(req, res){
        let status = 200;
        let body = {};
        try {
            let posts = await Post.find();
            body = {posts, 'message':'List posts'};
        } catch (error){
            status = 500;
            body = {'message':error.message};
        }
        return res.status(status).json(body);
        console.log(posts);
    }

    static async create(req,res){
        let status = 200;
        let body = {};

        try {
            let post = await Post.create({
                title: req.body.montitre,
                content:req.body.moncontent
            })
            body = {post, 'message': 'Post cread'};
        } catch (error) {
            status = 500;
            body = {'message': error.message}
        }
        return res.status(status).json(body);
    }    
    
    static async details(req,res){
        let status = 200;
        let body = {};

        try {
            let id = req.params.id;
            let posts = await Post.findById(id);
            body = {posts, 'message':'List posts'};
        } catch (error) {
            status = 500;
            body = {'message': error.message}
        }
        return res.status(status).json(body);
    }
}

export default PostController;

/**
 * findOne('slug')
 */