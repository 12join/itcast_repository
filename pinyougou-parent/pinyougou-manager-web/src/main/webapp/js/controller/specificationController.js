 //控制层 
app.controller('specificationController' ,function($scope,$controller   ,specificationService){	
	
	$controller('baseController',{$scope:$scope});//继承
	
    //读取列表数据绑定到表单中  
	$scope.findAll=function(){
		specificationService.findAll().success(
			function(response){
				$scope.list=response;
			}			
		);
	}    
	
	//分页
	$scope.findPage=function(page,rows){			
		specificationService.findPage(page,rows).success(
			function(response){
				$scope.list=response.rows;	
				$scope.paginationConf.totalItems=response.total;//更新总记录数
			}			
		);
	}
	
	//查询实体 
	$scope.findOne=function(id){				
		specificationService.findOne(id).success(
			function(response){
				$scope.entity= response;					
			}
		);				
	}
	
	//保存 
	$scope.save=function(){				
		var serviceObject;//服务层对象  				
		if($scope.entity.specification.id!=null){//如果有ID
			serviceObject=specificationService.update( $scope.entity ); //修改  
		}else{
			serviceObject=specificationService.add( $scope.entity  );//增加 
		}				
		serviceObject.success(
			function(response){
				if(response.success){
					//重新查询 
		        	$scope.reloadList();//重新加载
				}else{
					alert(response.message);
				}
			}		
		);				
	}
	
	 
	//批量删除 
	$scope.dele=function(){	
		if($scope.selectIds.length==0){
			alert("请确认输入你要删除的商品");
			return false;
		}
		//获取选中的复选框			
		if(confirm("确定删除选中的商品")){
			specificationService.dele($scope.selectIds).success(
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
	
	$scope.searchEntity={};//定义搜索对象 
	
	//搜索
	$scope.search=function(page,rows){			
		specificationService.search(page,rows,$scope.searchEntity).success(
			function(response){
				$scope.list=response.rows;	
				$scope.paginationConf.totalItems=response.total;//更新总记录数
			}			
		);
	}
	//定义变量初始化,不能为空
	//$scope.entity={specificationController:[]};
	//定义添加选项的规格选项
	$scope.addtableRows=function(){
		//把行作为整体添加
		$scope.entity.specificationController.push({});
	}
	
	//定义删除的方法
	$scope.deleteTableRows=function(index){
		$scope.entity.specificationController.splice(index,1);
	}
    
});	
