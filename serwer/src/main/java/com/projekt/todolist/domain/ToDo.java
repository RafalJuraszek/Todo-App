package com.projekt.todolist.domain;


import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@Entity
public class ToDo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long toDoId;


    private String userId;

    private Long deadline;
    private String title;
    private String description;
    private String priority;
    private boolean finished;



}
