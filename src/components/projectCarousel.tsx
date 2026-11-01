
import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { projects } from '../data/projects'
import { ProjectCard } from './projectCard'

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: 'start',
      containScroll: 'trimSnaps',
      slidesToScroll: 1
    },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  )

  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const updateButtons = useCallback(() => {
    if (!emblaApi) return

    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    emblaApi.on('select', updateButtons)
    emblaApi.on('reInit', updateButtons)

    return () => {
      emblaApi.off('select', updateButtons)
      emblaApi.off('reInit', updateButtons)
    }
  }, [emblaApi, updateButtons])

  const scrollPrev = () => {
    emblaApi?.scrollPrev()
  }

  const scrollNext = () => {
    emblaApi?.scrollNext()
  }

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
          disabled={!canScrollPrev}
          type="button"
        >
          Prev
        </button>

        <button
          className="embla__next"
          onClick={scrollNext}
          disabled={!canScrollNext}
          type="button"
        >
          Next
        </button>
      </div>
    </div>
  )
}
