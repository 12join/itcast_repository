 //控制层 
app.controller('typeTemplateController' ,function($scope,$controller,typeTemplateService,brandService,specificationService){	
	
	$controller('baseController',{$scope:$scope});//继承
	
    //读取列表数据绑定到表单中  
	$scope.findAll=function(){
		typeTemplateService.findAll().success(
			function(response){
				$scope.list=response;
			}			
		);
	}    
	
	//分页
	$scope.findPage=function(page,rows){			
		typeTemplateService.findPage(page,rows).success(
			function(response){
				$scope.list=response.rows;	
				$scope.paginationConf.totalItems=response.total;//更新总记录数
			}			
		);
	}
	
	//查询实体 
	$scope.findOne=function(id){				
		typeTemplateService.findOne(id).success(
			function(response){
				$scope.entity= response;
				//后台代码是字符串形式,转换成json格式
				$scope.entity.specIds=JSON.parse($scope.entity.specIds);//转换规格列表
				$scope.entity.brandIds=JSON.parse($scope.entity.brandIds);//转换品牌列表
				$scope.entity.customAttributeItems=JSON.parse($scope.entity.customAttributeItems);//转换扩展属性
			}
		);				
	}
	
	//保存 
	$scope.save=function(){				
		var serviceObject;//服务层对象  				
		if($scope.entity.id!=null){//如果有ID
			serviceObject=typeTemplateService.update( $scope.entity ); //修改  
		}else{
			serviceObject=typeTemplateService.add( $scope.entity  );//增加 
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
        if(confirm("确定删除选中的商品")){
        	typeTemplateService.dele($scope.selectIds).success(
                       function(response) {
                        //判断是否成功
                        if(response.success){
                            $scope.reloadList();//重新加载
                            $scope.selectIds=[];
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
		typeTemplateService.search(page,rows,$scope.searchEntity).success(
			function(response){
				$scope.list=response.rows;	
				$scope.paginationConf.totalItems=response.total;//更新总记录数
			}			
		);
	}
	//添加一个品牌下拉列表
	//  data: [{id:1,text:'bug'},{id:2,text:'duplicate'},{id:3,text:'invalid'},{id:4,text:'wontfix'}
	//初始化品牌列表
	$scope.brandList={data:[]};
	$scope.findBrandList=function(){
		brandService.selectOptionList().success(
				function(response){
					$scope.brandList={data:response};
				}		
		);
	}
	
	$scope.specList={data:[]};//规格列表
	$scope.findSpecList=function(){
		specificationService.selectOptionList().success(
				function(response){
					$scope.specList={data:response};
				}		
		);
	}
	//定义变量初始化,不能为空
	//$scope.entity={customAttributeItems:[]};
	//定义添加选项的规格选项
	$scope.addtableRows=function(){
		//把行作为整体添加
		$scope.entity.customAttributeItems.push({});
	}
	
	//定义删除的方法
	$scope.deleteTableRows=function(index){
		$scope.entity.customAttributeItems.splice(index,1);
	}
    
});	
