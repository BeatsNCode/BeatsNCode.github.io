
import { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { projects } from '../data/projects'
import { ProjectCard } from '../data/projectCard'

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false },
    [Autoplay()]
  )

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.plugins().autoplay?.play()
  }, [emblaApi])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {projects.map((project) => (
            <div className="embla__slide" key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__buttons">
        <button
          className="embla__prev"
          onClick={scrollPrev}
          type="button"
        >
          Prev
        </button>

        <button
          className="embla__next"
          onClick={scrollNext}
          type="button"
        >
          Next
        </button>
      </div>
    </div>
  )
}
