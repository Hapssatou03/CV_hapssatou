"use client";

import Image from "next/image";
import html2pdf from "html2pdf.js";
import React from "react";

export default function Home() {
  const downloadPDF = () => {
    const element = document.getElementById("cv");
    if (!element) return;

    html2pdf()
      .set({
        margin: 0,
        filename: "Hapssatou-Sy-CV.pdf",
        html2canvas: { scale: 2, useCORS: true, backgroundColor: null },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      })
      .from(element)
      .save();
  };

  return (
    <main className="min-h-screen bg-[#f7f3ff] px-4 py-10">
      {/* Bouton PDF */}
      <div className="mx-auto mb-6 flex max-w-[900px] items-center justify-end">
        <button
          onClick={downloadPDF}
          className="rounded-full bg-[#7c5cff] px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(124,92,255,0.35)] transition hover:scale-[1.02]"
        >
          Télécharger en PDF ⬇
        </button>
      </div>

      {/* CV A4 */}
      <section
        id="cv"
        className="relative mx-auto w-[210mm] min-h-[297mm] max-w-full overflow-hidden rounded-[34px] border border-white/40 bg-white/40 p-8 shadow-[0_25px_80px_rgba(124,92,255,0.18)] backdrop-blur-xl"
      >
        {/* Background (dégradé + code + étoiles) */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#f4efff] via-[#fbf8ff] to-[#f1ecff]" />
          <div className="code-bg absolute inset-0 opacity-[0.04]" />
          <div className="stars absolute inset-0 opacity-60" />
          <div className="absolute inset-0 bg-white/30" />
        </div>

        {/* Contenu */}
        <div className="relative z-10">
          {/* HERO */}
          <div className="cv-card rounded-[32px] p-7">
            <div className="flex items-center justify-between gap-6">
              {/* Left */}
              <div className="min-w-[320px]">
                <h1 className="font-script text-5xl font-extrabold tracking-tight text-[#6a45ff]">
                  Hapssatou Sy
                </h1>

                <p className="mt-2 text-lg font-semibold text-[#2d2a3a]">
                  Développeuse Full-Stack
                </p>

                <div className="mt-6 grid gap-3 text-sm text-[#3e3a52]">
                  <p className="flex items-center gap-2">
                    <span className="text-[#7c5cff]">📍</span> France
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-[#7c5cff]">✉️</span>{" "}
                    hapssatousy01@gmail.com
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-[#7c5cff]">🐙</span>{" "}
                    github.com/Hapssatou03
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-[#7c5cff]">🌐</span> Portfolio
                  </p>
                </div>
              </div>

              {/* Right illustration (style maquette) */}
              <div className="relative h-[210px] w-[330px] shrink-0">
                {/* cercle pastel derrière */}
                <div className="absolute right-4 top-4 h-[210px] w-[210px] rounded-full bg-[#e9ddff] shadow-[0_20px_60px_rgba(124,92,255,0.25)]" />

                {/* étoiles */}
                <div className="absolute right-10 top-6 h-2 w-2 rounded-full bg-[#b9a7f2] opacity-70" />
                <div className="absolute right-24 top-2 h-3 w-3 rounded-full bg-[#b9a7f2] opacity-50" />
                <div className="absolute right-2 top-16 h-2 w-2 rounded-full bg-[#b9a7f2] opacity-60" />

                {/* bulles UI */}
                <div className="absolute left-0 top-10 rounded-xl bg-white/70 px-3 py-2 text-xs font-semibold text-[#6a45ff] shadow-md backdrop-blur">
                  {"</>"}
                </div>
                <div className="absolute left-8 top-[88px] rounded-xl bg-white/70 px-3 py-2 text-xs text-[#3e3a52] shadow-md backdrop-blur">
                  API
                </div>
                <div className="absolute left-0 top-[135px] rounded-xl bg-white/70 px-3 py-2 text-xs text-[#3e3a52] shadow-md backdrop-blur">
                  UI
                </div>

                {/* image */}
                <div className="absolute bottom-0 right-0 h-[220px] w-[300px] overflow-hidden rounded-[26px] bg-white/25 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.65)] backdrop-blur">
                  <Image
                    src="/images/dev-girl.png"
                    alt="Developer girl illustration"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* PROFIL */}
          <div className="cv-card mt-6 rounded-[32px] p-7">
            <h2 className="section-title font-script text-2xl font-extrabold text-[#6a45ff]">
              Profil
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#3e3a52]">
              Passionnée par la programmation et forte de 2 ans d’expérience en
              développement full-stack, je conçois des fonctionnalités front-end,
              back-end et des API. Curieuse et autonome, je suis actuellement
              ouverte à une opportunité d’alternance et serais ravie de mettre mes
              compétences au service de votre entreprise.
            </p>
          </div>

          {/* GRID */}
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* COMPETENCES */}
            <Card title="Compétences">
              <div className="mt-5 space-y-3">
                <SkillRow title="Backend" items="Java, Spring Boot, API REST, JWT" />
                <SkillRow
                  title="Frontend"
                  items="React, React Native, Next.js, HTML/CSS, Bootstrap"
                />
                <SkillRow title="Databases" items="MySQL, PostgreSQL, MongoDB" />
                <SkillRow
                  title="Outils"
                  items="Docker, Git/GitHub, Postman, Swagger, Figma"
                />
              </div>
            </Card>

            {/* PROJETS */}
            <Card title="Projets">
              <div className="mt-5 rounded-2xl bg-white/45 p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.65)]">
                <h3 className="text-lg font-extrabold text-[#2d2a3a]">
                  Spendy — App de gestion financière
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] text-[#3e3a52]">
                  <li>API REST avec Spring Boot</li>
                  <li>Authentification JWT & rôles Admin / User</li>
                  <li>Frontend en React & Vite</li>
                  <li>Dockerisation & tests unitaires</li>
                </ul>
              </div>
            </Card>

            {/* FORMATION */}
            <Card title="Formation">
              <div className="mt-5 rounded-2xl bg-white/45 p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.65)]">
                <p className="text-[15px] font-semibold text-[#2d2a3a]">
                  Concepteur Développeur d’Applications (CDA)
                </p>
                <p className="mt-1 text-[14px] text-[#3e3a52]">2024 — 2025</p>
              </div>
            </Card>

            {/* SOFT SKILLS */}
            <Card title="Soft Skills">
              <div className="mt-5 flex flex-wrap gap-3">
                <Pill text="Autonomie" />
                <Pill text="Esprit d’équipe" />
                <Pill text="Problem Solving" />
                <Pill text="Créativité" />
                <Pill text="Persévérance" />
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="cv-card rounded-[32px] p-7">
      <h2 className="font-script text-2xl font-extrabold text-[#6a45ff]">
        {title}
      </h2>
      {children}
    </div>
  );
}

function SkillRow({ title, items }: { title: string; items: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-white/45 px-4 py-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.65)]">
      <span className="rounded-full bg-[#7c5cff] px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(124,92,255,0.25)]">
        {title}
      </span>
      <span className="text-sm text-[#3e3a52]">{items}</span>
    </div>
  );
}

function Pill({ text }: { text: string }) {
  return (
    <span className="rounded-full bg-[#7c5cff] px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(124,92,255,0.25)]">
      {text}
    </span>
  );
}
