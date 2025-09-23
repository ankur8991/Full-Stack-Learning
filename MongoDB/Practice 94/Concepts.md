                                     ✅ MongoDB (CRUD) operations 

                                      1) Quick Mapping(What does CRUD map to in MongoDB)

                                      . Create → insertOne(), insertMany()
                                      . Read → find(), findOne(), cursor methods, aggregation(aggregate())
                                      . Update → updateOne(), updateMany(), findOneAndUpdate(), replaceOne()(with operators like $set, $inc, $push)
                                      . Delete → deleteOne(), deleteMany()
                                      . Extras → bulkWrite(), transactions, aggregation pipeline, indexes, projection, validation



                                      2) Useful operators cheat-sheet

                                      . Update operators: $set, $unset, $inc, $push, $addToSet, $pull, $rename, $mul.

                                      . Query operators: $gt, $lt, $in, $nin, $exists, $regex, $elemMatch.

                                      . Aggregation stages: $match, $group, $project, $sort, $skip, $limit, $unwind, $lookup.




                                    3) Quick cheat-sheet (one-liners)
                                  
                                  .  Mongosh insert one: db.users.insertOne({name:'A', Gmail:'a@x.com'})

                                   . Find: db.users.find({}) or db.users.findOne({Gmail:'a@x.com'})

                                   . Update: db.users.updateOne({Gmail:'a@x.com'}, {$set:{name:'A2'}})

                                   . Upsert: db.users.updateOne({Gmail:'a@x.com'}, {$set:{name:'A2'}}, {upsert:true})

                                   . Delete: db.users.deleteOne({Gmail:'a@x.com'})

                                  . Aggregation: db.users.aggregate([{$match:{}},{$group:{_id:'$skills',count:{$sum:1}}}])

                                   . Create index: db.users.createIndex({Gmail:1}, {unique:true})