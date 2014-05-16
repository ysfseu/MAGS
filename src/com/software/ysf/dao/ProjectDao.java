package com.software.ysf.dao;

import java.util.List;
import java.util.Set;

import com.software.ysf.entity.Project;
import com.software.ysf.entity.User;

public interface ProjectDao {
	public Project getProjectById(int id);
	public Project getProjectByName(String projectname);
	public Set<Project> getProjectByUser(User user);
	public void insertProject(Project project);
	public void deleteProjectById(int id);
	public void deleteProjectByName(String projectname);
	public void deleteProjectByUser(User user);

}
