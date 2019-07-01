//定义控制器
    app.controller('myController',function($scope,$controller,brandService){
    	//继承baseController父控制器
    	$controller('baseController',{$scope:$scope});
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
						if(response.success){
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
                            if(response.success){
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