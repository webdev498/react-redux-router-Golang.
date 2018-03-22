package com.promise.integrationtest.server.message;

public enum ServerGroupMessage
{
    DeleteDefault ("Server.Message.ServerGroupDeleteDefault");
    private String id;

    ServerGroupMessage(String id)
    {
        this.id = id;
    }

    public String getId()
    {
        return id;
    }
}
