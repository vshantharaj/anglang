package main

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
)

func startup() {
	r := mux.NewRouter()
	r.HandleFunc("/", handler)
}

func handler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	respon := getherolist()
	//rr, _ := json.Marshal(respon)
	//w.Write(rr)
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(respon)
}

type Hero struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}

func getherolist() []Hero {
	var mylist = []Hero{
		Hero{ID: 1, Name: "test1"},
		Hero{ID: 2, Name: "test2s"},
	}
	return mylist
}
