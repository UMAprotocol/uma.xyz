import { TryOsnapModal, useTryOsnapModal } from "@/components/Osnap/TryOsnapModal";
import { Meta, StoryObj } from "@storybook/react";
import { useEffect } from "react";

const meta = {
  component: TryOsnapModal,
} satisfies Meta<typeof TryOsnapModal>;

export default meta;

type Story = StoryObj;

const Template: Story = {
  args: {},
  render: function Wrapper() {
    const modalProps = useTryOsnapModal();

    useEffect(() => {
      modalProps.showModal();
    }, [modalProps]);

    return (
      <div
        style={{
          color: "white",
        }}
      >
        <button
          style={{
            background: "red",
            color: "white",
            padding: "1rem",
            fontSize: "1rem",
            borderRadius: "0.5rem",
            margin: "1rem",
          }}
          onClick={() => {
            modalProps.showModal();
          }}
        >
          open modal
        </button>
        <TryOsnapModal {...modalProps} />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci vel porro ea, illo molestiae, voluptates
        dolorem provident eius unde similique voluptatem tempore aspernatur obcaecati numquam officiis qui ratione
        perspiciatis fuga recusandae. Ducimus quidem nisi cum magnam veniam dolores voluptas maiores ut distinctio
        laudantium quasi cumque perspiciatis, natus nam? Fugit sed recusandae, temporibus nam nesciunt dignissimos id,
        sequi dolorem pariatur minima aspernatur dolore? Sequi illo corrupti corporis hic officiis eveniet aperiam
        doloremque, consequuntur laudantium odio sapiente dolor animi deserunt. Ea, nam pariatur ab autem odio magni
        alias? Iure inventore architecto laborum eaque ipsum saepe sapiente nisi. Perferendis magnam incidunt quod,
        facilis itaque natus voluptatibus reiciendis voluptas consectetur qui commodi at cupiditate labore,
        reprehenderit velit id eos minima deleniti doloribus. Rem explicabo cupiditate perspiciatis quod autem rerum
        odio assumenda tempore officia, dolorum ab vitae distinctio magni unde quia consequuntur nobis praesentium nam,
        aliquam corrupti, nemo hic quaerat aspernatur! Odio perferendis sunt praesentium eum unde quaerat, cupiditate
        veritatis facere harum consequatur corrupti, minus tempora voluptatum repellat iste eos aliquid! Itaque natus,
        laudantium ullam impedit ipsam amet quas tempora quisquam odio provident harum sed, est earum laborum quos,
        exercitationem consequuntur illum reprehenderit numquam nesciunt nam. Voluptatem consequuntur corrupti assumenda
        labore commodi repellendus ex laborum? Neque nesciunt, id doloremque officia quod nostrum distinctio
        reprehenderit. Similique, molestias veritatis! Optio debitis iste cumque voluptates, itaque nesciunt. Voluptate,
        voluptas animi! Deserunt temporibus est quisquam minus ducimus quam dolorum quibusdam sequi magni voluptatum
        quis animi saepe natus error eius fugiat maiores fuga, expedita excepturi incidunt impedit rem harum? Earum
        laudantium nobis, veniam dolorum delectus incidunt nisi tenetur quis tempora, accusantium asperiores odio optio?
        Ex cumque quae ipsa consequatur inventore amet aliquid, distinctio quisquam incidunt explicabo repellendus
        maxime rerum, possimus quasi asperiores harum omnis expedita laudantium modi voluptatum sed error, voluptatibus
        esse? In at natus voluptate nihil. Natus ex, corrupti quas delectus accusamus repellendus nostrum quos beatae
        excepturi aliquid dolor, sequi doloremque ipsa quae reiciendis temporibus ullam vel sint, provident sapiente
        tempora doloribus nemo nesciunt debitis. Fuga vitae laboriosam iure fugit necessitatibus dicta error veritatis
        laborum repellat pariatur deserunt delectus animi at, debitis numquam a enim omnis quos repudiandae eius ducimus
        veniam excepturi odio? Quo sequi labore maxime dolorum accusantium aut minima officiis. Modi asperiores
        repellendus aspernatur, illum quibusdam quo voluptas veritatis dolore numquam saepe non similique praesentium
        cupiditate excepturi laborum perspiciatis, fugit eveniet distinctio. Rem, totam nam blanditiis laborum nemo
        voluptas magnam velit dolorum dolor illo. Quasi dolorum accusamus commodi necessitatibus, enim, rerum corporis,
        culpa quam quos possimus explicabo facere. Blanditiis, exercitationem! Quisquam pariatur reiciendis error odio
        minus. Cupiditate provident nulla fugiat ab maxime illum dicta voluptate porro asperiores fuga dolor nisi quos
        quam eum, atque accusamus culpa labore earum sint quis dolores repellat? Ipsam, labore sequi reprehenderit
        blanditiis optio doloremque inventore, veritatis similique ratione facilis ab. Placeat, ipsum? Eum dolore natus
        accusantium quae tempore! Ullam, iste animi vel dignissimos debitis dicta! Mollitia ducimus provident corrupti
        atque molestiae quaerat ad laborum, delectus iusto suscipit maxime iure, eveniet perferendis consectetur optio
        saepe necessitatibus ratione beatae repellat vitae iste commodi quisquam!
      </div>
    );
  },
};

export const Main = {
  ...Template,
};
