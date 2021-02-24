import React from 'react'

class RouteShow extends React.Component {
  constructor(props) {
    super(props)


    this.editPage = this.editPage.bind(this)
  }
  
  editPage(e) {
    e.preventDefault();
    this.props.history.push(`/routes/${route.id}/edit`)
  }

  render() {
    return (
      <div className="route-show-cntr">
        {/* section 1 - route title, distance, user name, 
            date created, activity, location, edit button */}
        <div className="rs-body">
          <div className="bar">
            <button onClick={editPage()}>
  
            </button>
          </div>
  
          <section className="rs-content1">
            Route Show
          </section>
  
          {/* section 2 - minimap, comments section */}
          <section className="rs-map">
  
          </section>
        </div>
      </div>
    )
  }
}

export default RouteShow;