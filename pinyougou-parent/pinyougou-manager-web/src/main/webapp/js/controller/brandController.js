//定义控制器
    app.controller('myController',function($scope,brandService){
    	 //读取列表数据绑定到表单中 
    	 //定义一个查询方法
    	$scope.findAll=function(){
    		 //向后台发出请求
    		brandService.findAll().success(
    				
    				function(response){
                        $scope.list=response;
                    }   
    		);
    	 }
    	 
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
    	
    	//切换页码的方法
    	$scope.findPage=function(page,rows){
    		
    		brandService.findPage(page,rows).success(
    				function(response){
                        $scope.list=response.rows;
                        $scope.paginationConf.totalItems=response.total;
                    }   
    		);
    	}
    	
    	//新增
    	$scope.save=function(){
    		//定义一个变量
    		//var methodName='add';
    		var object=null;
    		//判断是否有id
    		if($scope.entity.id!=null){
    			//methodName='update';
    			object=brandService.update($scope.entity)
    		}else {
    			object=brandService.add($scope.entity)
			}
    		   object.success(
    				   function(response) {
						//判断是否成功
						if(response.sccess){
							$scope.reloadList();//重新加载
						}else {
						alert(response.message);
						}
    					   
					}   
    		   );
    	}
    	
    	//通过id查询
    	$scope.findOne=function(id){
    		brandService.findOne(id).success(
                    function(response){
                        $scope.entity=response;
                    }   
            );
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
    	
    	//定义删除方法
        $scope.delete=function(){
    		if($scope.selectIds.length==0){
    			alert("请确认输入你要删除的商品");
    			return false;
    		}
            if(confirm("确定删除选中的商品")){
            	brandService.delete($scope.selectIds).success(
                           function(response) {
                            //判断是否成功
                            if(response.sccess){
                                $scope.reloadList();//重新加载
                            }else {
                            alert(response.message);
                            }  
                        }   
                   );
            }else {
            	$scope.reloadList();//重新加载
			}   
        }
    	
    	//初始化参数
    	$scope.searchEntity={};
    	//定义查询的方法
        $scope.search=function(page,rows){
        	brandService.search(page,rows,$scope.searchEntity).success(
                    function(response){
                        $scope.list=response.rows;
                        $scope.paginationConf.totalItems=response.total;
                    }   
            );
    	}
    	
    });