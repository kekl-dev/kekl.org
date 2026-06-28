<script setup lang="ts">
const { t } = useLanguage()

useHead(() => ({
  title: t('committee.page_title'),
}))

type Member = {
  name: string
  roleKey: string
  photoUrl: string
}

type CityCommittee = {
  city: string
  members: Member[]
}

const bppMembers: Member[] = [
  {
    name: 'Nama Pengurus',
    roleKey: 'committee.roles.chair',
    photoUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Nama Pengurus',
    roleKey: 'committee.roles.vice_chair',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Nama Pengurus',
    roleKey: 'committee.roles.secretary',
    photoUrl: 'https://images.unsplash.com/photo-1524503033411-f9fadc2bd5c8?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Nama Pengurus',
    roleKey: 'committee.roles.treasurer',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Nama Pengurus',
    roleKey: 'committee.roles.programs',
    photoUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Nama Pengurus',
    roleKey: 'committee.roles.communications',
    photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop'
  }
]

const bpkCommittees: CityCommittee[] = [
  {
    city: 'Jakarta',
    members: [
      {
        name: 'Nama Pengurus',
        roleKey: 'committee.roles.city_chair',
        photoUrl: 'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=400&auto=format&fit=crop'
      },
      {
        name: 'Nama Pengurus',
        roleKey: 'committee.roles.secretary',
        photoUrl: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=400&auto=format&fit=crop'
      },
      {
        name: 'Nama Pengurus',
        roleKey: 'committee.roles.treasurer',
        photoUrl: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=400&auto=format&fit=crop'
      }
    ]
  },
  {
    city: 'Semarang',
    members: [
      {
        name: 'Nama Pengurus',
        roleKey: 'committee.roles.city_chair',
        photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop'
      },
      {
        name: 'Nama Pengurus',
        roleKey: 'committee.roles.events',
        photoUrl: 'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=400&auto=format&fit=crop'
      },
      {
        name: 'Nama Pengurus',
        roleKey: 'committee.roles.community',
        photoUrl: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=400&auto=format&fit=crop'
      }
    ]
  },
  {
    city: 'Surabaya',
    members: [
      {
        name: 'Nama Pengurus',
        roleKey: 'committee.roles.city_chair',
        photoUrl: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=400&auto=format&fit=crop'
      },
      {
        name: 'Nama Pengurus',
        roleKey: 'committee.roles.communications',
        photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop'
      }
    ]
  }
]
</script>

<template>
  <section class="bg-[#f7f7f7] pt-24 md:pt-28 pb-16 md:pb-20 px-6 md:px-20 overflow-hidden">
    <div class="max-w-[1240px] mx-auto">
      <div class="max-w-3xl">
        <p class="inline-flex items-center gap-2 text-[11px] font-black tracking-[0.25em] uppercase text-loyola-red mb-4">
          <span class="h-px w-6 bg-loyola-red inline-block"></span>
          {{ t('committee.tag') }}
        </p>
        <h1 class="text-3xl md:text-5xl font-sans font-black text-[#111111] leading-tight tracking-tight">
          {{ t('committee.title') }}
        </h1>
        <p class="text-[15px] md:text-[17px] text-[#5a6373] leading-relaxed font-medium mt-5">
          {{ t('committee.subtitle') }}
        </p>
      </div>
    </div>
  </section>

  <section class="bg-white py-16 md:py-20 px-6 md:px-20 border-t border-black/5">
    <div class="max-w-[1240px] mx-auto">
      <div class="flex items-end justify-between gap-6 mb-10">
        <div>
          <p class="inline-flex items-center gap-2 text-[11px] font-black tracking-[0.25em] uppercase text-loyola-red mb-3">
            <span class="h-px w-6 bg-loyola-red inline-block"></span>
            {{ t('committee.bpp_tag') }}
          </p>
          <h2 class="text-2xl md:text-3xl font-sans font-black text-[#111111] leading-tight tracking-tight">
            {{ t('committee.bpp_title') }}
          </h2>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(member, idx) in bppMembers"
          :key="`bpp-${idx}`"
          class="rounded-3xl bg-[#f7f7f7] border border-black/5 shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-6"
        >
          <div class="flex items-center gap-4">
            <img
              :src="member.photoUrl"
              :alt="member.name"
              class="w-16 h-16 rounded-full object-cover ring-2 ring-white shadow"
              loading="lazy"
            >
            <div class="min-w-0">
              <p class="text-[12px] font-black tracking-[0.18em] uppercase text-loyola-red">
                {{ t(member.roleKey) }}
              </p>
              <p class="text-lg font-black text-[#111111] truncate">
                {{ member.name }}
              </p>
              <p class="text-[13px] text-[#5a6373] font-medium truncate">
                {{ t('committee.member_caption') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-[#f7f7f7] py-16 md:py-20 px-6 md:px-20 border-t border-black/5">
    <div class="max-w-[1240px] mx-auto">
      <div class="mb-10">
        <p class="inline-flex items-center gap-2 text-[11px] font-black tracking-[0.25em] uppercase text-loyola-red mb-3">
          <span class="h-px w-6 bg-loyola-red inline-block"></span>
          {{ t('committee.bpk_tag') }}
        </p>
        <h2 class="text-2xl md:text-3xl font-sans font-black text-[#111111] leading-tight tracking-tight">
          {{ t('committee.bpk_title') }}
        </h2>
        <p class="text-[14px] md:text-[15px] text-[#5a6373] leading-relaxed font-medium mt-3 max-w-3xl">
          {{ t('committee.bpk_desc') }}
        </p>
      </div>

      <div class="space-y-4">
        <details
          v-for="(city, idx) in bpkCommittees"
          :key="`bpk-${idx}`"
          class="group rounded-3xl bg-white border border-black/5 shadow-[0_8px_24px_rgba(0,0,0,0.06)] overflow-hidden"
        >
          <summary class="cursor-pointer select-none list-none px-6 py-5 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <span class="w-2.5 h-2.5 rounded-full bg-loyola-red"></span>
              <div>
                <p class="text-[11px] font-black tracking-[0.18em] uppercase text-loyola-red">
                  {{ t('committee.city_label') }}
                </p>
                <p class="text-lg font-black text-[#111111] leading-tight">
                  {{ city.city }}
                </p>
              </div>
            </div>
            <div class="flex items-center gap-2 text-[#111111]/70">
              <span class="text-[12px] font-bold">
                {{ t('committee.accordion_hint') }}
              </span>
              <Icon name="lucide:chevron-down" class="w-4 h-4 transition-transform duration-200 group-open:rotate-180" />
            </div>
          </summary>

          <div class="px-6 pb-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                v-for="(member, mIdx) in city.members"
                :key="`bpk-${idx}-${mIdx}`"
                class="rounded-2xl bg-[#f7f7f7] border border-black/5 p-5"
              >
                <div class="flex items-center gap-4">
                  <img
                    :src="member.photoUrl"
                    :alt="member.name"
                    class="w-14 h-14 rounded-full object-cover ring-2 ring-white shadow"
                    loading="lazy"
                  >
                  <div class="min-w-0">
                    <p class="text-[12px] font-black tracking-[0.18em] uppercase text-loyola-red">
                      {{ t(member.roleKey) }}
                    </p>
                    <p class="text-[16px] font-black text-[#111111] truncate">
                      {{ member.name }}
                    </p>
                    <p class="text-[13px] text-[#5a6373] font-medium truncate">
                      {{ t('committee.member_caption') }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </details>
      </div>
    </div>
  </section>
</template>
