 //定义品牌服务层
    app.service("brandService",function($http){
    	//抽取查询所有
    	this.findAll=function(){
    		return $http.get('../brand/findAll.do');
    	}
    	//抽取分页方法
    	this.findPage=function(page,rows){
    		return $http.get('../brand/findPage.do?page='+page+'&size='+rows);
    	}
    	//添加方法
    	this.add=function(entity){
    		return $http.post('../brand/save.do',entity);
    	}
    	//修改方法
    	this.update=function(entity){
            return $http.post('../brand/update.do',entity);
        }
    	//根据id查询
    	this.findOne=function(id){
    		return $http.get('../brand/findOne.do?id='+id);
    	}
    	//删除方法
    	this.delete=function(selectIds){
    		return $http.post('../brand/delete.do?ids='+selectIds);
    	}
    	//条件查询的方法
    	this.search=function(page,rows,searchEntity){
    		return $http.post('../brand/search.do?page='+page+'&size='+rows,searchEntity);
    	}
    });