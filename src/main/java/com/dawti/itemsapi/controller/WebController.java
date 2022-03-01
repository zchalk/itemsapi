package com.dawti.itemsapi.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebController {
    @RequestMapping(value = "/index")
    public String index() {
        return "index";
    }
    @RequestMapping(value = "/about")
    public String about() {
        return "about";
    }
    @RequestMapping(value = "/items")
    public String items() {
        return "items";
    }
    @RequestMapping(value = "/login")
    public String login() {
        return "login";
    }
    @RequestMapping(value = "/form")
    public String form() {
        return "item_form";
    }
    @RequestMapping(value = "/update")
    public String update() {
        return "update_form";
    }
}