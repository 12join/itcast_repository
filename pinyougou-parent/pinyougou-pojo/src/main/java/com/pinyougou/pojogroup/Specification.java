package com.pinyougou.pojogroup;

import java.io.Serializable;
import java.util.List;

import com.pinyougou.pojo.TbSpecification;
import com.pinyougou.pojo.TbSpecificationOption;

public class Specification implements Serializable{
	private TbSpecification specification;
	
	private List<TbSpecificationOption> specificationController;
	

	
	public TbSpecification getSpecification() {
		return specification;
	}

	public void setSpecification(TbSpecification specification) {
		this.specification = specification;
	}

	public List<TbSpecificationOption> getSpecificationController() {
		return specificationController;
	}

	public void setSpecificationController(List<TbSpecificationOption> specificationController) {
		this.specificationController = specificationController;
	}
	
}
