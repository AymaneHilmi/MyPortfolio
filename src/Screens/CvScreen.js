
import { React } from "react";
import { Timeline } from "../components/ui/timeline";
import lab from "../assets/AymaneLab.jpeg"
import philipp from "../assets/AymanePhilipp.jpeg"
import { cn } from "../../lib/utils";

export default function CvScreen() {
    const data = [
        {
            title: "2024",
            content: (
                <div>
                    <p className={cn("font-sfbold text-darkGray  text-xl md:text-3xl font-normal", className)}>
                        International Mobility at Saint-Gobain Research Germany
                    </p>
                    <p  className={cn("font-sfregular text-lightGray  text-sm md:text-base font-normal mb-4", className)}>
                        Herzogenrath – Germany
                    </p>
                    <div className={cn("grid grid-cols-2 gap-4", className)}>
                        <img
                            src={lab}
                            alt="hero template"
                            width={500}
                            height={500}
                            className={cn("rounded-lg object-cover h-40 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]", className)}
                        />
                        <img
                            src={philipp}
                            alt="feature template"
                            width={500}
                            height={500}
                            className={cn("rounded-lg object-cover h-40 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]", className)}
                        />
                    </div>

                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div>
                    <p className={cn("font-sfbold text-darkGray  text-xl md:text-3xl font-normal", className)}>
                        Started Editing services
                    </p>
                    <p className={cn("font-sfregular text-lightGray  text-sm md:text-base font-normal mb-4", className)}>
                        Montpellier, France
                    </p>
                    <img
                        src="https://cdn.prod.website-files.com/634e7aa49f5b025e1fd9e87b/65203a6eac2146476807a036_video-montage-editing.jpeg"
                        alt="hero template"
                        width={500}
                        height={500}
                        className={cn("rounded-lg object-cover h-40 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]", className)}
                    />
                </div>
            ),
        },
        {
            title: "2022",
            content: (
                <div>
                    <p className={cn("font-sfbold text-darkGray  text-xl md:text-3xl font-normal", className)}>
                        Started Engineering program in Work-Study at Saint-Gobain Research Provence
                    </p>
                    <p className={cn("font-sfregular text-lightGray text-sm md:text-base font-normal mb-2", className)}>
                        Cavaillon, Provence-Alpes-Côte d'Azur, France
                    </p>
                    <img
                        src="https://www.saint-gobain.com/sites/saint-gobain.com/files/styles/facebook/public/field/image/sgr_provence.png.webp?itok=wPEuK0SI"
                        alt="hero template"
                        width={500}
                        height={500}
                        className={cn("rounded-lg object-cover h-40 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]", className)}
                    />
                </div>
            ),
        },

        {
            title: "Early 2022",
            content: (
                <div>
                    <p className={cn("font-sfbold text-darkGray  text-xl md:text-3xl font-normal", className)}>
                        Internship at Inetum as a Software Engineer (RPA Automations)
                    </p>
                    <p className={cn("font-sfregular text-lightGray  text-sm md:text-base font-normal mb-2", className)}>
                        Montpellier, France
                    </p>
                    <img
                        src="https://www.inetum.com/upload/public/styles/opengraph/public/media/image/2021-04/logo-blue.png?itok=AIeQf7_6"
                        alt="hero template"
                        width={500}
                        height={500}
                        className={cn("rounded-lg object-cover h-40 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]", className)}
                    />
                </div>
            ),
        },
        {
            title: "2021",
            content: (
                <div>
                    <p  className={cn("font-sfbold text-darkGray  text-xl md:text-3xl font-normal", className)}>
                        Civic Volonteer Program at "AVEC" association
                    </p>
                    <p className={cn("font-sfregular text-lightGray  text-base md:text-lg font-normal mb-2", className)}>
                        Montpellier, France
                    </p>
                    <p  className={cn("font-sfregular text-darkGray  text-base md:text-lg font-normal mb-4", className)}>
                        I completed a Voluntary Civic Service where I helped high school and middle school students with various scientific subjects.
                        Having earned a Scientific Baccalaureate, I was confident in this field. This service allowed me to support my studies financially.
                    </p>

                    <img

                        src="https://www.demarches-mairie.fr/wp-content/uploads/sites/10/2020/09/creation_association-1024x567.jpeg"
                        alt="hero template"
                        width={500}
                        height={500}
                        className={cn("rounded-lg object-cover h-40 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]", className)}
                    />
                </div>
            ),
        },
        {
            title: "Early 2021",
            content: (
                <div>
                    <p  className={cn("font-sfbold text-darkGray  text-xl md:text-3xl font-normal", className)}>
                        Intensive Two-year Study Course in Computer Science
                    </p>
                    <p className={cn("font-sfregular text-lightGray text-base md:text-lg font-normal mb-6", className)}>
                        Cesi école d'ingénieurs, Mauguio, France
                    </p>
                    <img

                        src="https://etudestech.com/wp-content/uploads/2022/03/logo-cesi.jpg"
                        alt="hero template"
                        width={500}
                        height={500}
                        className={cn("rounded-lg object-cover h-40 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]", className)}
                    />
                </div>
            ),
        },
        {
            title: "2020",
            content: (
                <div>
                    <p  className={cn("font-sfbold text-darkGray  text-xl md:text-3xl font-normal", className)}>
                        Scientific High School Diploma - Mathematics specialization
                    </p>
                    <p className={cn("font-sfregular text-lightGray text-base md:text-lg font-normal mb-6", className)}>
                        Lycéé Jules Guesde, Montpellier, France
                    </p>
                    <div className={cn("grid grid-cols-2 gap-4", className)}>
                        <img
                            src="https://bpa.archi/wp-content/uploads/2019/03/bpa-architecture-projet-internat-jules-guesde-00.jpg"
                            alt="hero template"
                            width={500}
                            height={500}
                            className={cn("rounded-lg object-cover h-40 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]", className)}
                        />
                        <img
                            src="https://jules-guesde.mon-ent-occitanie.fr/lectureFichiergw.do?ID_FICHIER=33814"
                            alt="feature template"
                            width={500}
                            height={500}
                            className={cn("rounded-lg object-cover h-40 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]", className)}
                        />
                    </div>

                </div>
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
            <div className={cn("flex justify-center items-center", className)}>
                <div className={cn("font-sfultralight border-t border-gray-300 my-6 w-11/12 flex flex-row  justify-between md:justify-end ", className)}>
                    <div className={cn('flex flex-row gap-4 md:hidden', className)}>

                        <a href="https://www.linkedin.com/in/aymanehilmi/" className={cn("text-base font-bold mt-6", className)} style={{ color: '#a3a8af' }}>Linkedin ↗</a>
                        <a href="https://github.com/AymaneHilmi" className={cn("text-base font-bold mt-6", className)} style={{ color: '#a3a8af' }}>GitHub ↗</a>
                    </div>

                    <h1 className={cn("text-base font-bold mt-6", className)} style={{ color: '#a3a8af' }}>by Aymane HILMI</h1>

                </div>
            </div>
        </div>


    )
}
