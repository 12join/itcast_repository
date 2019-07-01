app.controller('baseController',function($scope){
	$scope.paginationConf= { 
            currentPage: 1, //当前页的页码
            totalItems: 10, //总共有多少条
            itemsPerPage: 10, //每页显示多少条
            perPageOptions: [5, 10, 15, 20, 25], //每页展示的条数选项
            onChange: function(){ //当上面四个值发生变化的时候会默认调用
            	$scope.reloadList();//重新加载
            }
       };
	
	//定义刷新列表的方法
	$scope.reloadList=function(){
		//切换页码
		$scope.search($scope.paginationConf.currentPage,$scope.paginationConf.itemsPerPage);
	}
	
	//定义一个id的集合
	$scope.selectIds=[];
	//定义删除方法 用户勾选复选框
	$scope.updateSelection=function($event,id){
		if($event.target.checked){
			$scope.selectIds.push(id);//添加id到集合中
		}else {
			var index=$scope.selectIds.indexOf(id);//查询到数组中id的值索引
			$scope.selectIds.splice(index,1);//参数1：移除的位置 参数2：移除的个数  
		}
	}
	
	//提取 json 字符串数据中某个属性，返回拼接字符串 逗号分隔
	$scope.jsonToString=function(jsonString,key){
		//把传入的字符串转换成json
		var json=JSON.parse(jsonString);
		 
		//定义一个初始量 字符串的拼接
		var value="";
		for(var i=0;i<json.length;i++){   
			   if(i>0){ 
			    value+="," 
			   } 
			   value+=json[i][key];    
			  } 
			  return value; 
	}
	
});