export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8f4382678dba013a153810',
                  title: 'Back End',
                  name: 'bon-appe-airplane-studio',
                  apiId: '45315008-c1b1-4341-ae9c-9bb5b1076f34'
                },
                {
                  buildHookId: '5f8f4382a0419f0136576903',
                  title: 'Front End',
                  name: 'bon-appe-airplane',
                  apiId: '9bb52b68-0fba-41a4-bf32-93025ca8c5cc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ztlhayden/bon-appe-airplane',
            category: 'Code'
          },
          { title: 'Front End', value: 'https://bon-appe-airplane.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent Posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
