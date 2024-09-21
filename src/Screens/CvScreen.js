
import { React, img } from "react";
import { Timeline } from "../components/ui/timeline";
import lab from "../assets/AymaneLab.jpeg"
import philipp from "../assets/AymanePhilipp.jpeg"

export default function CvScreen() {
    const data = [
        {
            title: "2024",
            content: (
                <div>
                    <p style={{ fontFamily: 'SFBOLD', color: '#3b3d41' }} className="text-neutral-800  text-xl md:text-4xl font-normal">
                        International Mobility at Saint-Gobain Research Germany
                    </p>
                    <p style={{ fontFamily: 'SFREGULAR', color: '#a9a5ac' }} className="text-neutral-800  text-sm md:text-base font-normal mb-4">
                        Herzogenrath – Germany
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src={lab}
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-40 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <img
                            src={philipp}
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-40 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>

                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div>
                    <p style={{ fontFamily: 'SFBOLD', color: '#3b3d41' }} className="text-neutral-800  text-xl md:text-4xl font-normal ">
                        Started Editing services
                    </p>
                    <p style={{ fontFamily: 'SFREGULAR', color: '#a9a5ac' }} className="text-neutral-800  text-sm md:text-base font-normal mb-4">
                        Montpellier, France
                    </p>
                    <img
                        src="https://cdn.prod.website-files.com/634e7aa49f5b025e1fd9e87b/65203a6eac2146476807a036_video-montage-editing.jpeg"
                        alt="hero template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-40 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            ),
        },
        {
            title: "2022",
            content: (
                <div>
                    <p style={{ fontFamily: 'SFBOLD', color: '#3b3d41' }} className="text-neutral-800  text-xl md:text-4xl font-normal">
                        Started Engineering program in Work-Study at Saint-Gobain Research Provence
                    </p>
                    <p style={{ fontFamily: 'SFREGULAR', color: '#a9a5ac' }} className="text-neutral-800  text-sm md:text-base font-normal mb-2">
                        Cavaillon, Provence-Alpes-Côte d'Azur, France
                    </p>
                    <img
                        src="https://www.saint-gobain.com/sites/saint-gobain.com/files/styles/facebook/public/field/image/sgr_provence.png.webp?itok=wPEuK0SI"
                        alt="hero template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-40 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            ),
        },

        {
            title: "Early 2022",
            content: (
                <div>
                    <p style={{ fontFamily: 'SFBOLD', color: '#3b3d41' }} className="text-neutral-800  text-xl md:text-4xl font-normal">
                        Internship at Inetum as a Software Engineer (RPA Automations)
                    </p>
                    <p style={{ fontFamily: 'SFREGULAR', color: '#a9a5ac' }} className="text-neutral-800  text-sm md:text-base font-normal mb-2">
                        Montpellier, France
                    </p>
                    <img
                        src="https://www.inetum.com/upload/public/styles/opengraph/public/media/image/2021-04/logo-blue.png?itok=AIeQf7_6"
                        alt="hero template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-40 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            ),
        },
        {
            title: "2021",
            content: (
                <div>
                    <p style={{ fontFamily: 'SFBOLD', color: '#3b3d41' }} className="text-neutral-800  text-xl md:text-4xl font-normal">
                        Civic Service at "AVEC" association (to finance my studies)
                    </p>
                    <p style={{ fontFamily: 'SFREGULAR', color: '#a9a5ac' }} className="text-neutral-800  text-base md:text-lg font-normal mb-2">
                        Montpellier, France
                    </p>
                    <p style={{ fontFamily: 'SFREGULAR', color: '#3b3d41' }} className="text-neutral-800  text-base md:text-lg font-normal mb-4">
                        I completed a Voluntary Civic Service where I helped high school and middle school students with various scientific subjects.
                        Having earned a Scientific Baccalaureate, I was confident in this field. This service allowed me to support my studies financially.
                    </p>

                    <img

                        src="https://www.demarches-mairie.fr/wp-content/uploads/sites/10/2020/09/creation_association-1024x567.jpeg"
                        alt="hero template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-40 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            ),
        },
        {
            title: "Early 2021",
            content: (
                <div>
                    <p style={{ fontFamily: 'SFBOLD', color: '#3b3d41' }} className="text-neutral-800  text-xl md:text-4xl font-normal">
                        Integrated Preparatory Program in Computer Science
                    </p>
                    <p style={{ fontFamily: 'SFREGULAR', color: '#a9a5ac' }} className="text-neutral-800  text-base md:text-lg font-normal mb-6">
                        Cesi école d'ingénieurs, Mauguio, France
                    </p>
                    <img

                        src="https://etudestech.com/wp-content/uploads/2022/03/logo-cesi.jpg"
                        alt="hero template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-40 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            ),
        },
        {
            title: "2020",
            content: (
                <div>
                    <p style={{ fontFamily: 'SFBOLD', color: '#3b3d41' }} className="text-neutral-800  text-xl md:text-4xl font-normal">
                        Scientific Baccalaureate - Mathematics specialization
                    </p>
                    <p style={{ fontFamily: 'SFREGULAR', color: '#a9a5ac' }} className="text-neutral-800  text-base md:text-lg font-normal mb-6">
                        Lycéé Jules Guesde, Montpellier, France
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://bpa.archi/wp-content/uploads/2019/03/bpa-architecture-projet-internat-jules-guesde-00.jpg"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-40 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <img
                            src="https://jules-guesde.mon-ent-occitanie.fr/lectureFichiergw.do?ID_FICHIER=33814"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-40 md:h-64 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>

                </div>
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>

    )
}
