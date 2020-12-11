import Mock from 'mockjs';
Mock.mock("/getData",()=>{
    return Mock.mock({
        "list|10":[{
            "title":"@ctitle",
            "img":"@image(100x100,@color)"
        }]
    })
})