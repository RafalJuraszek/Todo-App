package com.projekt.todolist.repositories;

import com.projekt.todolist.domain.ToDo;
import org.springframework.data.repository.CrudRepository;

public interface ToDoRepository extends CrudRepository<ToDo, Long> {

    Iterable<ToDo> findByUserId(String userId);
}
