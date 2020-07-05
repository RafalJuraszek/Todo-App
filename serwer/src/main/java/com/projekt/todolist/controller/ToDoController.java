package com.projekt.todolist.controller;


import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

import java.security.Principal;

import com.projekt.todolist.domain.ToDo;
import com.projekt.todolist.repositories.ToDoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j

public class ToDoController {

    final String uri = "https://dev-490248.okta.com/oauth2/default/v1/token";

    @Autowired

    ToDoRepository toDoRepository;


    @RequestMapping(value = "/api/toDos", method = RequestMethod.GET)
    public Iterable<ToDo> contacts(@AuthenticationPrincipal Principal userInfo) {
        log.info("UserInfo"+userInfo);
        System.out.println(userInfo.getName());
        return toDoRepository.findByUserId(userInfo.getName());
    }

    @PostMapping(value = "/api/toDos",  consumes =APPLICATION_JSON_VALUE)
    public ToDo saveContact(@RequestBody ToDo todo,@AuthenticationPrincipal Principal userInfo) {
        log.info("Contact data:: "+todo.toString());
        log.info("User Name:: "+userInfo.getName());
        todo.setUserId(userInfo.getName());
        return toDoRepository.save(todo);
    }



}