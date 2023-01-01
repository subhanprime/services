const Users = require('./models/users');
const Tweets = require('./models/tweet');
const Post = require('./models/post');
const PostCreator = require('./models/postCreator');
const post_relation = require('./models/post_relation');
const News = require('./models/news');
const Tags = require('./models/tags');
const tagsNews = require('./models/tagsNews');
// ******************************************
News.belongsToMany(Tags, { through: tagsNews });
Tags.belongsToMany(News, { through: tagsNews });
// ******************************************
Users.hasOne(Tweets, { foreignKey: 'id' });
Tweets.belongsTo(Users, { foreignKey: 'id' });
// ******************************************
Post.belongsToMany(PostCreator, { through: post_relation });
PostCreator.belongsToMany(Post, { through: post_relation });

const createCutomer = (req, res) => {
    Users.create({ userName: 'subhan ali' });
    Tweets.create({ content: "tweet is done" });
    Post.create({ content: 'dummy post' })
    res.send('create customer ');
}

const oneUserwithTweets = (req, res) => {
    Users.findAll({
        where: {
            userName: 'subhan ali'
        },
        include: [{ model: Tweets }]
    }).then(data => {
        res.send(data)
    })
}
const findAllCutomer = (req, res) => {
    Users.findAll().then(data => {
        res.send(data)
    })
}
const findByEmailCutomer = (req, res) => {

}
const postCreatorfn = async (req, res) => {
    // const Post = require('./models/post');
    // const postCreator = require('./models/postCreator');
    // const post_relation = require('./models/post_relation');
    // let p = Post.create({ content: "Pxt my content 9" });
    // let c = PostCreator.create({ name: "subhan ali 6" });
    // post_relation.create({ postId: 9, postCreatorId:6});
    // c.addPost(p)

    // const data = await Post.findOne({
    //     where: {
    //         id: 3
    //     },
    //     include: PostCreator
    // })
    News.create({ name: "news four", title: "title four", content: "four content", userId: "4" });
    Tags.create({ name: "sports" });
    tagsNews.create({ tagsId: 3, newsId: 4 });
    res.status(200).send('data')
}

module.exports = {
    createCutomer,
    // updatreCutomer,
    findAllCutomer,
    findByEmailCutomer,
    // deleteCutomer,
    oneUserwithTweets,
    postCreatorfn,
}