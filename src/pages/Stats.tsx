import { Award, Briefcase, Globe, GraduationCap } from "lucide-react";

const Stats = () => {
    const stats = [
        { icon: Briefcase, label: 'Projects Completed', value: '1+' },
        { icon: Award, label: 'Years Experience', value: '2+' },
        { icon: GraduationCap, label: 'Happy Clients', value: '0+' },
        { icon: Globe, label: 'Countries', value: '1+' },
    ];
  
    return (
      <section className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <stat.icon className="w-10 h-10 mx-auto text-indigo-600 dark:text-indigo-400 mb-3" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    )
}

export default Stats;