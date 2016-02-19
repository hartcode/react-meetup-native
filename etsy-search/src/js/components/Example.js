import React, { Component, PropTypes } from 'react';

export default class Example extends Component {

  constructor(props, context) {
    super(props, context);
  }

  

  render() {

    const { example } = this.props;

    return (
      <main>
<div className="row results">
  <div className="large-12 columns ">
              <input type="text" className="search-field" placeholder="your search "/>
</div>
</div>
<div className="row results">
  <div className="large-12 columns ">
    <div className="row">
      <div className="large-9 columns">
        <p> Search Results for "Cat Clients: 123</p>
      </div>
      <div className=" large-3 columns ">
        <select name="sortOptions">
          <option value="sortby">Sort By</option>
          <option value="cats">Cats</option>
          <option value="title">Title</option>
          <option value="name">Name</option>
          <option value="mrecats">More Cats</option>
        </select>
      </div>
    </div>
    <div className="search-results">
      <div className="row ">
        <div className="large-2 columns">
          <a href="#"> <span> </span><img src="http://placehold.it/150x200&text=client cover" alt="client cover" className=" thumbnail"/></a>
        </div>
        <div className="large-10 columns">
          <div className="row">
            <div className=" large-9 columns">
              <h5><a href="#">Do cats hear with their feet? : where cats come from, what we know about them, and what they think about us </a></h5>
              <p><a href="#"> Info</a> | <a href="#">Email</a></p>
            </div>
            <div className=" large-3 columns">
              <a href="#"  className="button  expand medium"><span>Open</span> </a>
              <a href="#"  className="button  expand medium"><span>Add to List</span></a> 
            </div>
            <div className="row">
              <div className=" large-12 columns">
                <ul className="large-block-grid-2">
                  <li>
                    <ul>
                      <li><strong>Name: </strong>John Doe</li>
                      <li><strong>Last Active:</strong> 2008</li>
                      <li><strong>More info:</strong> Lorem ipsum</li>
                      <li><strong>More cat stuff: </strong> cats cats cats</li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li><strong>Wow cats:</strong> so wow</li>
                      <li><strong>Lorem cats:</strong> ipsum kitty</li>
                      <li><strong>Series:</strong> all the cats</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr/>
      </div>
      <div className="row ">
        <div className="large-2 columns">
          <a href="#"> <span> </span><img src="http://placehold.it/150x200&text=client cover" alt="client cover" className=" thumbnail"/></a>
        </div>
        <div className="large-10 columns">
          <div className="row">
            <div className=" large-9 columns">
              <h5><a href="#">Do cats hear with their feet? : where cats come from, what we know about them, and what they think about us </a></h5>
              <p><a href="#"> Info</a> | <a href="#">Email</a></p>
            </div>
            <div className=" large-3 columns">
              <a href="#"  className="button  expand medium"><span>Open</span> </a>
              <a href="#"  className="button  expand medium"><span>Add to List</span></a> 
            </div>
            <div className="row">
              <div className=" large-12 columns">
                <ul className="large-block-grid-2">
                  <li>
                    <ul>
                      <li><strong>Name: </strong>John Doe</li>
                      <li><strong>Last Active:</strong> 2008</li>
                      <li><strong>More info:</strong> Lorem ipsum</li>
                      <li><strong>More cat stuff: </strong> cats cats cats</li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li><strong>Wow cats:</strong> so wow</li>
                      <li><strong>Lorem cats:</strong> ipsum kitty</li>
                      <li><strong>Series:</strong> all the cats</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr/>
      </div>
      <div className="row ">
        <div className="large-2 columns">
          <a href="#"> <span> </span><img src="http://placehold.it/150x200&text=client cover" alt="client cover" className=" thumbnail"/></a>
        </div>
        <div className="large-10 columns">
          <div className="row">
            <div className=" large-9 columns">
              <h5><a href="#">Do cats hear with their feet? : where cats come from, what we know about them, and what they think about us </a></h5>
              <p><a href="#"> Info</a> | <a href="#">Email</a></p>
            </div>
            <div className=" large-3 columns">
              <a href="#"  className="button  expand medium"><span>Open</span> </a>
              <a href="#"  className="button  expand medium"><span>Add to List</span></a> 
            </div>
            <div className="row">
              <div className=" large-12 columns">
                <ul className="large-block-grid-2">
                  <li>
                    <ul>
                      <li><strong>Name: </strong>John Doe</li>
                      <li><strong>Last Active:</strong> 2008</li>
                      <li><strong>More info:</strong> Lorem ipsum</li>
                      <li><strong>More cat stuff: </strong> cats cats cats</li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li><strong>Wow cats:</strong> so wow</li>
                      <li><strong>Lorem cats:</strong> ipsum kitty</li>
                      <li><strong>Series:</strong> all the cats</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr/>
      </div>
      <div className="row ">
        <div className="large-2 columns">
          <a href="#"> <span> </span><img src="http://placehold.it/150x200&text=client cover" alt="client cover" className=" thumbnail"/></a>
        </div>
        <div className="large-10 columns">
          <div className="row">
            <div className=" large-9 columns">
              <h5><a href="#">Do cats hear with their feet? : where cats come from, what we know about them, and what they think about us </a></h5>
              <p><a href="#"> Info</a> | <a href="#">Email</a></p>
            </div>
            <div className=" large-3 columns">
              <a href="#"  className="button  expand medium"><span>Open</span> </a>
              <a href="#"  className="button  expand medium"><span>Add to List</span></a> 
            </div>
            <div className="row">
              <div className=" large-12 columns">
                <ul className="large-block-grid-2">
                  <li>
                    <ul>
                      <li><strong>Name: </strong>John Doe</li>
                      <li><strong>Last Active:</strong> 2008</li>
                      <li><strong>More info:</strong> Lorem ipsum</li>
                      <li><strong>More cat stuff: </strong> cats cats cats</li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li><strong>Wow cats:</strong> so wow</li>
                      <li><strong>Lorem cats:</strong> ipsum kitty</li>
                      <li><strong>Series:</strong> all the cats</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr/>
      </div>
    </div>
    <a href="#" className="button right"> show more results &raquo;</a>
  </div>
</div>
</main>
    );
  }
}

Example.propTypes = {
    example: PropTypes.object.isRequired
};
