import '../css/Video.css'
import React from 'react'

export default class MyVideo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
          <section id={this.props.id} className="flex justify-center observed md:p-10 w-full observed">
            <video className="flex w-full h-auto max-w-full border border-gray-200 rounded-lg p-4 sm:h-64 xl:h-96 2xl:h-96 sm:w-10/12 xl:w-9/12 2xl:w-7/12 m-auto" controls autoPlay muted>
              <source src={this.props.item} type="video/mp4"></source>
            </video>
          </section>
    )
  }
}
