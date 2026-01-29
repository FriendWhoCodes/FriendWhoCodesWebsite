export function About() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">About Me</h1>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Hello! I&apos;m Alok Sharma, a software developer based in India,
              working remotely to build great products.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I specialize in building web applications and have experience with
              various technologies across the stack. I&apos;m passionate about
              creating clean, efficient code and delivering solutions that make
              a real impact.
            </p>

            <div className="pt-4">
              <h2 className="text-xl font-semibold mb-4">Skills</h2>
              {/* TODO: Populate from resume */}
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          <div>
            {/* TODO: Add profile photo */}
            <div className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Photo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
