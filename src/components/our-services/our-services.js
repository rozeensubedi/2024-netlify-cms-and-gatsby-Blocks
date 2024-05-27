import React from "react"
import "./services.css"
import Card from "../card"

function OurServices({ data }) {
  return (
    <div className="our-service">
      {data.serviceInfo.edges.map(({ node }, index) => {
        if (
          node.frontmatter.serviceTitle != null 
        ) {
          return (
            <div key={index} className="section-title">
              <span className="sub-title">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAiCAYAAAA+stv/AAAFCElEQVRYhb1Xf0yUZRz/vM97dxzecUAiYMiPlSVBLpvm3CDWSHdsQVlgGlNImOVK0tqwRmbTpVuuuSFLmhNTSq22hpoV/RB/wagF00xRkQDxEJUfB3fHy929975Pe9zhzpfj7gW1z3/v8+P7+Tzf7/f5fp+XgwLWzoJoAB8ByAMQC2BAkvCzJMkbYx7/ul25/l5xlwBrZ8FMACcAxCntyjIc/3YM5cx//vCJ+ymAKL4P+iO/vZDAmJQUdiA/L3HaAxFg7SyYD2BeoMVankwvXpGyTOm5e4HGZ++TauxET5uSCiAUgKBmPV1fvABAPIDT3LaqG8p53xB41BgURUlQCA9EvhtAI4DvKNDe8carOYEEsOSiwYy2XLQ2MR0qyGcDKB795oDQaEPoFgAmvwIik6q7JAl7Axl1DHsal68++QcAZzABAKKUA1pCGHmYXwEMPI81Lpdc689a9y2pa/3G+vcA3FTjqdzzjq4et3xXWLvtw0eVofabzWdPvZxrNGqXaLV8jChK1srDNKGqTp4zbO1dKp4/9X0wckN67gwW0id0JObLmdqGBD2vs9gd9XP2HqoWKb3qG8JA14nN6ZljSEKKTh8/6zgPLsHZ35MhXmr8Jxg5QCOd3e3FUsfZBhY9r7dHWE0L6oFxDCcCtDkxebZzQW5BM9HqUm7HU5ZYea7heE3lgY/XRoySuyxthZ7Ocyxf+gLZVS1g1TGLThiy/jglPHKhv3mP6L5xfM8Oqfd6V6hacgZlKQ6EneORM2i0utiMFaunTw03rVNLrlrAqmOWeb53ejyETDGSjKJ3swAMqT2VqooGYJlagyGmiGyO8A9RWbrpO15R3mAG8BwAO6uMJWvT2ti42hAkqxVACG9KXlwUryCvAsDqywcAtlBKWzZvqnmNzan1gJrKdwd9NmF3WNorrTLHXctOTZMAFPnOcxynDTdFfR4Xl3xMlQB7/60bYVOjVZG7BLtjxG4fACGphJDMEI3Wr3hCSOSzaS/NvS0gq77sGQBrCMUMSZb/4njyWW361j5Dem4CgE+OV1cuf6HkQ8prNEGvrdPa/4XjzyPbvbHWPGYufIu53d/aq9dah0hWfVk2AHZtCmQOmRxP3pc90plpOUsrAVxmZX2o59rOga62T4ORe1wjfx8tW7kPQK+3+g1GhEftopSOuZKCYPupsbHGwpJwm7IpEQ0/4+GMSDN1Ow8Jl5oWOZtrNx1atXCDKDjeoVQe8Ufucgz9+svmt4sFy5VO34ZTsjatTxRdmW63k70LZEplwWbr319esY4lZC+XVV/mt7O5Hc7f67K2F3pPc6d55FQciTNGxa6ERjN/sOd6DuVw2tnTsePE1pLR4jNewrLwhbObCkDy1gqR5QBTnDTGnU53p9fYXY+PH0pe7GZ5oX960VTeYOqThm2nnWd+q/W6PBDYQQeV88z1G8Zskqm1/WDjV97u5Re8wST57ghCPi5IbfrW/W7bSJ4kuOslt+eie1Coubzv5BLLt80XAglQceIJg/e+11hL1anZbEjPpfq55nIAxsmS+hYi5lLbJGxMpKPev820NP+p6ke1csPccLPlzcXmydqZ1B8OLc1/BMA5FoXRsdZ+2+uz9hzdN1Fbk/VAni85Q4xBv0L55H6QAsbkiihTu/cR+78I2O+Racvoh0Sp7ZsL7ew3LNC19YtJ/+XS0vzQKwO25YIoRe1saqnb1XKVvXD6J2QEwH8PA/Uf4hwXIQAAAABJRU5ErkJggg=="
                  alt="features"
                />
                Our Services
              </span>
              <h2>{node.frontmatter.serviceTitle}</h2>
              <p>
                {node.frontmatter.serviceDescription}
              </p>
            </div>
          )
        }
      })}
      <div className="cards">
        {data.testimonialInfo.edges.map(({ node }) => {
          if (node.frontmatter.title != "") {
            return (
              <Card
                key={node.id}
                title={node.frontmatter.title}
                content={node.frontmatter.content}
                link={node.frontmatter.link}
              />
            )
          }
        })}
      </div>
    </div>
  )
}

export default OurServices
