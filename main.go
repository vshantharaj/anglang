package main

import (
	"net/http"
)

func main() {

	//startup
	//startup()
	http.HandleFunc("/api/heroes", handler)

	http.Handle("/", http.FileServer(http.Dir("./publish/")))
	http.ListenAndServe(":8000", nil)

}
