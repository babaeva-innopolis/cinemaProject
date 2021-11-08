function(film){
this._data = filmData;
}
Film.protatype.getTitle = function(){
    return this._data.title || this._data.name;
}
Film.protatype.getTime = function(){
    return this._data.time; 
}

Film.protatype.getGenres = function(){
    return this._data.genres.join(', ');
}

Film.protatype.getId = function(){
    return this._data.id || "${this._data.name.replaceAll(' ','-')}-${this._data.time}"
    
}
Film.protatype.renderFilmTableItem = function (){
    return`
    <tr class="movie-table__row-tbody table-tbody"> 
    <td>
    <input 
    type="checkbox2"
    class="block03__checkbox2"
    id= "${this.getId()}"
    />
    <label for="${this.getId()}">
    <svg class="check"
    width=".55rem"
     height=".45rem" 
     viewBox="0 0 11 9" 
     fill="none" 
     xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" 
clip-rule="evenodd" d="M4.60581 8.79378L1.46056 5.93033L0.787354 6.66979L4.70255 10.2342L10.8223 2.94099L10.0562 2.2982L4.60581 8.79378Z" fill="white"/>
</svg>

    </label>
  </td>                            
    <td>${this.getTime()}</td>
    <td>${this.getTitle()}</td>
    <td>${this.getGenres()}</td>
</tr>
`;

}
