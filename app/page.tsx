"use client";

import Image from "next/image";

const handleDownloadPdf = () => {
  window.print();
};

export default function CVPage() {
  return (
    <main className="cv-page">
    
      <div className="mx-auto w-full max-w-[980px] px-5 pt-3 sm:px-8 print:hidden">
        <div className="flex justify-end">
     <button
  onClick={() => window.print()}
  className="print:hidden rounded-full bg-violet-600/90 px-4 py-1.5 text-xs font-semibold text-white shadow hover:bg-violet-700"
>
  Télécharger en PDF ⬇️
</button>


        </div>
      </div>

      <div className="cv-overlay">
        <div className="relative mx-auto w-full max-w-[980px] px-5 py-6 sm:px-8 sm:py-6">
          {/* HEADER */}
          <section className="cv-card relative overflow-hidden px-6 py-5 sm:px-7 sm:py-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              {/* Left */}
              <div className="min-w-0">
              
                <h1 className="text-[30px] sm:text-[34px] font-extrabold text-violet-700 tracking-tight leading-none">
                  Hapssatou SY
                </h1>

                {/* Sous-titre = 12px */}
                <p className=" mt-2  text-[30px] tracking-tight text-slate-700">
                  Développeuse Full-Stack & IA
                </p>

                {/* Barre infos */}
                <div className="mt-3 flex flex-wrap items-center justify-start gap-x-4 gap-y-1 text-slate-700 sm:flex-nowrap sm:gap-x-5">
                  <div className="flex items-center gap-2 whitespace-nowrap cv-text">
                    <span className="text-violet-600">📍</span>
                    <span>Argenteuil 95</span>
                  </div>

                  <span className="hidden sm:inline text-slate-300">|</span>

                  <div className="flex items-center gap-2 whitespace-nowrap cv-text">
                    <span className="text-violet-600">📞</span>
                    <span>06 18 76 18 86</span>
                  </div>

                  <span className="hidden sm:inline text-slate-300">|</span>

                  <div className="flex items-center gap-2 whitespace-nowrap cv-text">
                    <span className="text-violet-600">✉️</span>
                    <span>hapssatousy01@email.com</span>
                  </div>

                  <span className="hidden sm:inline text-slate-300">|</span>

                  <div className="flex items-center gap-2 whitespace-nowrap cv-text">
                    <span className="text-violet-600">🔗</span>
                    <a
                      href="https://my-portfolio-beta-neon-11.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-violet-400 underline-offset-4 hover:text-violet-700"
                    >
                      Portfolio
                    </a>
                  </div>
                </div>

                {/* Phrase  */}
                <p className="mt-3 cv-text whitespace-nowrap text-slate-700">
                  Passionnée, autonome et créative, la programmation fait partie
                  de mon quotidien.
                </p>
              </div>

              {/* */}
              <div className="relative h-[150px] w-full md:h-[175px] md:w-[290px] md:translate-x-6">
                <div className="absolute inset-0 rounded-3xl bg-violet-200/40 blur-2xl" />
                <Image
                  src="/images/dev-girl.png"
                  alt="Illustration développeuse"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </section>

          {/* GRID */}
          <section className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="cv-card px-6 py-5">
              {/* ===================== */}
              {/* COMPÉTENCES */}
              {/* ===================== */}
              <h2 className="cv-title text-violet-700">Compétences</h2>

              <div className="mt-4 space-y-3">
                {/* Backend */}
                <div className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 shadow">
                    <img
                      src="/images/img-back.jpeg"
                      alt="Backend"
                      className="h-5 w-5"
                    />
                  </div>
                  <div>
                    <p className="cv-subtitle text-slate-800">Backend</p>
                    <p className="cv-text text-slate-700">
                      Java, Spring Boot, Python, Node.js, PHP
                    </p>
                  </div>
                </div>

                {/* Frontend */}
                <div className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 shadow">
                    <img
                      src="/images/img-front.png"
                      alt="Frontend"
                      className="h-5 w-5"
                    />
                  </div>
                  <div>
                    <p className="cv-subtitle text-slate-800">Frontend</p>
                    <p className="cv-text text-slate-700">
                      HTML, CSS, React, React Native, Next.js, TypeScript
                    </p>
                  </div>
                </div>

                {/* Databases */}
                <div className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 shadow">
                    <img
                      src="/images/bd-img.png"
                      alt="Databases"
                      className="h-5 w-5"
                    />
                  </div>
                  <div>
                    <p className="cv-subtitle text-slate-800">Databases</p>
                    <p className="cv-text text-slate-700">
                      MySQL, PostgreSQL, MongoDB
                    </p>
                  </div>
                </div>

                {/* Outils */}
                <div className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 shadow">
                    <img
                      src="/images/img-outil.png"
                      alt="Outils"
                      className="h-5 w-5"
                    />
                  </div>
                  <div>
                    <p className="cv-subtitle text-slate-800">Outils</p>
                    <p className="cv-text text-slate-700">
                      AWS, Docker, Git, GitHub, Figma, Jira
                    </p>
                  </div>
                </div>
              </div>

              {/* ===================== */}
              {/* CERTIFICATIONS */}
              {/* ===================== */}
              <h2 className="cv-title mt-4 text-violet-700">Certifications</h2>
              <ul className="mt-3 space-y-1 cv-text text-slate-700">
                <li>• AWS Cloud Practitioner</li>
                <li>• Méthodes Agiles / Scrum</li>
                <li>• Sécurité applicative (JWT)</li>
              </ul>

              {/* ===================== */}
              {/* LANGUES */}
              {/* ===================== */}
              <h2 className="cv-title mt-4 text-violet-700">Langues</h2>
              <ul className="mt-3 list-disc pl-4 space-y-1 cv-text text-slate-700">
                <li>Français</li>
                <li>Anglais (lecture et conversation)</li>
              </ul>

              {/* ===================== */}
              {/* CENTRES D’INTÉRÊT */}
              {/* ===================== */}
              <h2 className="cv-title mt-4 text-violet-700">
                Centres d’intérêt
              </h2>
              <ul className="mt-3 list-disc pl-4 space-y-1 cv-text text-slate-700">
                <li>Lecture</li>
                <li>Méditation</li>
                <li>Veille numérique</li>
              </ul>

              {/* ===================== */}
              {/* LIENS */}
              {/* ===================== */}
              <div className="mt-12 flex items-center justify-center gap-x-3 cv-text text-slate-700">
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <img
                    src="/images/github.svg"
                    alt="GitHub"
                    className="h-4 w-4"
                  />
                  <a
                    href="https://github.com/Hapssatou03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-violet-400 underline-offset-2 hover:text-violet-700"
                  >
                    GitHub
                  </a>
                </div>

                <span className="text-slate-300">|</span>

                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <img
                    src="/images/linkedin.png"
                    alt="LinkedIn"
                    className="h-4 w-4"
                  />
                  <a
                    href="https://www.linkedin.com/in/hapssatou-sy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-violet-400 underline-offset-2 hover:text-violet-700"
                  >
                    LinkedIn
                  </a>
                </div>
                <span className="hidden sm:inline text-slate-300">|</span>

                <div className="flex items-center gap-2 whitespace-nowrap cv-text">
                  <span className="text-violet-600">🔗</span>
                  <a
                    href="https://my-portfolio-beta-neon-11.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-violet-400 underline-offset-4 hover:text-violet-700"
                  >
                    Portfolio
                  </a>
                </div>
              </div>
            </div>

            {/* ===================== */}
            {/* COLONNE DROITE */}
            {/* ===================== */}
            <div className="space-y-4">
              {/* EXPÉRIENCES */}
              <div className="cv-card px-6 py-5">
                <h2 className="cv-title text-violet-700">
                  Expériences professionnelles
                </h2>

                {/* DADITECH */}
                <div className="mt-4">
                  <h3 className="cv-subtitle text-slate-800">
                    DADITECH — Développeuse Full-Stack
                  </h3>
                  <p className="cv-text font-medium text-violet-600">
                    Mars 2025 – Juillet 2025
                  </p>

                  <ul className="mt-2 list-disc space-y-1 pl-4 cv-text text-slate-700">
                    <li>Cadrage technique et fonctionnel</li>
                    <li>Développement d’APIs robustes</li>
                    <li>Coordination backend / frontend</li>
                    <li>Cérémonies Agile (daily, sprint)</li>
                    <li>Mise en production & déploiements</li>
                  </ul>
                </div>

                {/* THL */}
                <div className="mt-4">
                  <h3 className="cv-subtitle text-slate-800">
                    THL Technologie — Développeuse Full-Stack
                  </h3>
                  <p className="cv-text font-medium text-violet-600">
                    Avril 2022 – Septembre 2023
                  </p>

                  <ul className="mt-2 list-disc space-y-1 pl-4 cv-text text-slate-700">
                    <li>Mise en place CI/CD</li>
                    <li>Optimisation API & front-end</li>
                    <li>Modélisation & exposition des données</li>
                    <li>Maintenance de fonctionnalités full-stack</li>
                  </ul>
                </div>
                {/* G2R-Formation */}
                <div className="mt-3">
                  <h3 className="cv-subtitle text-slate-800">
                    G2R-Formation — Formatrice Numérique
                  </h3>

                  <p className="cv-text font-medium text-violet-600">
                    CDI · Septembre 2020 – Août 2021
                  </p>

                  <ul className="mt-2 list-disc space-y-1 pl-4 cv-text text-slate-700">
                    <li>
                      Préparation et animation de sessions de formation
                      numérique
                    </li>
                    <li>
                      Sensibilisation à la sécurité numérique et aux bonnes
                      pratiques
                    </li>
                    <li>
                      Formation aux outils collaboratifs (Google Workspace,
                      Office 365)
                    </li>
                  </ul>
                </div>
              </div>

              {/* FORMATIONS */}
              <div className="cv-card px-6 py-5">
                <h2 className="cv-title text-violet-700">Formations</h2>

                <div className="mt-4 space-y-3">
                  <div>
                    <h3 className="cv-subtitle text-slate-800">
                      Master II CTO & Tech Lead
                    </h3>
                    <p className="cv-text text-slate-700">
                      HETIC – Grande École Informatique
                    </p>
                    <p className="cv-text font-medium text-violet-600">
                      Octobre 2026 – Novembre 2027
                    </p>
                  </div>

                  <div>
                    <h3 className="cv-subtitle text-slate-800">
                      Master I – Concepteur Développeur d’Applications
                    </h3>
                    <p className="cv-text text-slate-700">
                      DORANCO – École Supérieure des Technologies
                    </p>
                    <p className="cv-text font-medium text-violet-600">
                      Octobre 2024 – Juillet 2025
                    </p>
                  </div>

                  <div>
                    <h3 className="cv-subtitle text-slate-800">
                      Titre RNCP – Développeur Mobile
                    </h3>
                    <p className="cv-text text-slate-700">OpenClassrooms</p>
                    <p className="cv-text font-medium text-violet-600">
                      Certification professionnelle RNCP (niveau 6)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="h-4" />
        </div>
      </div>
    </main>
  );
}
