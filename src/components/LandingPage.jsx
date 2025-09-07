const LandingPage = () => {
  return (
    <div className="w-screen flex justify-between p-8">
      <div className="flex-2/3 text-center">
        <div>
          <div className="text-6xl font-bold  mb-3">quiZbaaZ</div>
          <p className="text-2xl font-mono">
            Test Your Knowledge, Fuel Your Fun!
          </p>
        </div>
        <div className="lg:px-8">
          <p className="max-w-3xl">
            Our platform challenges you with questions on Java, Java Script, C,
            C ++, Python, and more, making learning both fun and effective.
            Compete with peers, track your progress, and climb the leaderboard
            to prove your skills. Ready to ace your next coding interview or
            simply want to learn new things? Quizbaaz is your perfect partner in
            this journey. Dive in, and let's make learning a thrilling
            adventure!
          </p>
        </div>
      </div>
      <div className="text-[200px] text-center hidden flex-1/3 md:block">qb</div>
    </div>
  );
};

export default LandingPage;
